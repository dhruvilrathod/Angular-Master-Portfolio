import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalStatsService } from './services/global-stats/global-stats.service';
import { AppConfig } from '../enums/app-data';
import AOS from 'aos';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';



@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        ScrollToTopComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    appConfig = AppConfig;

    constructor(
        public globalStatsService: GlobalStatsService,
    ) {
    }

    ngOnInit(): void {
        AOS.init({
            duration: 20000,
            once: true,
        });
    }
}
