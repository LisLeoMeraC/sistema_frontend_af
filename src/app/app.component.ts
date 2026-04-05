/*
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
*/


import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;       //enables core ripple functionality
		document.documentElement.style.fontSize = '14px';
        this.applyTheme();
		
        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            //theme: 'lara-light-indigo',         //default component theme for PrimeNG
			theme: 'mdc-light-deeppurple',         //default component theme for PrimeNG
			
            scale: 14                           //size of the body font size to scale the whole application
        };
    }

    applyTheme() {
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = themeLink.getAttribute('href')!.replace(/themes\/.*\.css/, `themes/${this.layoutService.config.theme}.css`);
        themeLink.setAttribute('href', newHref);
    }

}
