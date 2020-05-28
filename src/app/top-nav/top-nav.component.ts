import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@app/@core/services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  user: any;

  constructor(private readonly router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.user$.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  onLoggedout() {
    this.router.navigate(['/login']);
  }
}
