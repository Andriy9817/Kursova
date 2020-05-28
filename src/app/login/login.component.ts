import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {AuthService} from '@app/@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  hide = true;
  isSubmit = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  onLogin(e) {
    e.preventDefault();
    this.isSubmit = true;
    this.authService.login(this.email, this.password).pipe(
      finalize(() => this.isSubmit = false)
    ).subscribe(user => {
      this.router.navigateByUrl(`/`);
    });
  }

}
