import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-app',
    templateUrl: './main-app.component.html',
    styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

    title = 'dundts_frontend';

    constructor() {
    }

    ngOnInit(): void {
    }

}
