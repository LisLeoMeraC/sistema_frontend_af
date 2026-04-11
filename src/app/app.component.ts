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
        this.primengConfig.ripple = true;
		document.documentElement.style.fontSize = '14px';
        this.applyTheme();
    }

    applyTheme() {
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        if (themeLink) {
            const newHref = `assets/layout/styles/theme/${this.layoutService.config.theme}/theme.css`;
            themeLink.setAttribute('href', newHref);
        }
    }

}
