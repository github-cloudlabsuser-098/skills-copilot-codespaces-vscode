import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get formControls() {
        return this.loginForm.controls;
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        // Perform login logic here
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;

        // Example: Send login request to server
        // authService.login(email, password).subscribe(
        //   response => {
        //     // Handle successful login
        //   },
        //   error => {
        //     // Handle login error
        //   }
        // );
    }
}