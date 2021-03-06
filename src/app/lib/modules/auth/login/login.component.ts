import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";
import {LoginSentInterface} from "../../../../core/interfaces/auth.interface";
import {CommonService} from "../../../../core/services/common.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    @Output() loginForm: any = new EventEmitter();
    loginData: LoginSentInterface = {
        email: '',
        password: '',
    }
    
    private returnUrl: string = '/';
    
    constructor(
        private authService: AuthService,
        private commonService: CommonService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }
    
    ngOnInit(): void {
        let returnUrl = this.route.snapshot.queryParams['returnUrl'];
        if (returnUrl) {
            this.returnUrl = returnUrl;
        }
    }
    
    login(loginData: LoginSentInterface): boolean {
        if (! this.commonService.isEmail(loginData.email)) {
            alert('Email is not valid! Please check it.');
            return false;
        }
        if (loginData.password.length < AuthService.passwordLength) {
            alert(`Password length should be at least ${AuthService.passwordLength} character.`);
            return false;
        }
        this.authService
            .manageLogin(loginData)
            .then(() => {
                this.router.navigate([this.returnUrl]).then(r => {})
            })
        ;
        return true;
    }
}
