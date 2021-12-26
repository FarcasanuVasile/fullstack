import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoading: boolean = false;
  user = null;
  token: string = '';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.authService.login(this.authForm.value).subscribe((data: any) => {
      this.isLoading = true;
      console.log(data);
      localStorage.setItem('token', data.token);
      this.authService.loadUser().subscribe((data) => {
        console.log(data);
      });
      this.isLoading = false;
    });
  }
}
