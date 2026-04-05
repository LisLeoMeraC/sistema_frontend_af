import { Component, OnInit } from '@angular/core';
import {
    EmailValidator,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { UserService } from 'src/app/demo/service/user.service';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss'],
    providers: [MessageService],
})
export class UsuariosComponent implements OnInit {

    passwordFieldType: string = 'password';

    displayModal: boolean = false;
    displayModalUpdate: boolean = false;
    updateForm: FormGroup;
    registerForm: FormGroup;
    roles: any[] = [];
    rolSeleccionado: string = '';
    usuarios: any[] = [];
    msgs: Message[] = [];
    usuarioSeleccionado: any = null;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.registerForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            telefono: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rolFormulario: ['', Validators.required],
        });

        this.updateForm = this.fb.group({
            nombre: ['', Validators.required],
            apellido: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            telefono: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rolFormulario: ['', Validators.required],
        });
    }

    showModalDialog() {
        this.displayModal = true;
    }

    closeModalDialog() {
        this.displayModal = false;
        this.registerForm.reset();
    }

    onSubmit() {
        if (this.registerForm.invalid) {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }

        const user = this.registerForm.value;
        user.rolFormulario = user.rolFormulario.name;
        this.userService.registrarUsuario(user).subscribe(
            (data: any) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Usuario registrado correctamente',
                });
                this.closeModalDialog();
                this.obtenerUsuarios();
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al registrar usuario',
                });
            }
        );
    }

    ngOnInit(): void {
        this.roles = [
            { name: 'Gerente', value: 1 },
            { name: 'Secretario/a', value: 2 },
            { name: 'Asistente de Facturas', value: 3 },
        ];
        this.obtenerUsuarios();
    }

    togglePasswordVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }

    obtenerUsuarios() {
        this.userService.obtenerUsuarios().subscribe(
            (data: any[]) => {
                this.usuarios = data;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    eliminarUsuario(usuario: any) {
        this.userService.eliminarUsuario(usuario.id).subscribe(
            () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Usuario eliminado correctamente',
                });
                this.obtenerUsuarios();
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al eliminar usuario',
                });
            }
        );
    }

    confirmDeleteUsuario(usuario: any) {
        this.confirmationService.confirm({
            key: 'confirm',
            message: `¿Estás seguro de que deseas eliminar a ${usuario.nombre} ${usuario.apellido}?`,
            header: 'Confirmación',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Sí',
            rejectLabel: 'No',
            accept: () => {
                this.eliminarUsuario(usuario);
            },
        });
    }

    showUpdateModal(usuario: any) {
        this.usuarioSeleccionado = usuario; // Asigna el usuario seleccionado
        this.updateForm.patchValue({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            telefono: usuario.telefono,
            username: usuario.username,
            password: usuario.password,
            rolFormulario: this.roles.find(
                (role) => role.name === usuario.authorities[0].authority
            ),
        });
        this.displayModalUpdate = true;
    }

    onUpdate() {
       
    
        const user = {
            id: this.usuarioSeleccionado.id,
            nombre: this.updateForm.get('nombre')?.value,
            apellido: this.updateForm.get('apellido')?.value,
            correo: this.updateForm.get('correo')?.value,
            telefono: this.updateForm.get('telefono')?.value,
            username: this.updateForm.get('username')?.value,
            password: this.updateForm.get('password')?.value,
            rolFormulario: this.updateForm.get('rolFormulario')?.value.name,
            enabled: this.usuarioSeleccionado.enabled,
        };
    
        this.userService.actualizarUsuario(this.usuarioSeleccionado.id, user).subscribe(
            (data: any) => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Usuario actualizado correctamente',
                });
                this.closeUpdateModal();
                this.obtenerUsuarios();
            },
            (error: any) => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Error al actualizar usuario',
                });
            }
        );
    }
    closeUpdateModal() {
        this.displayModalUpdate = false;
        this.updateForm.reset();
    }

    
}
