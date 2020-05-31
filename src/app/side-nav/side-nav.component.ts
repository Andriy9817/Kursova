import {Component, OnInit} from '@angular/core';
import {routes} from '@app/app-routing.module';
import {AuthService} from '@app/@core/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  routes: any[] = routes;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.routes = routes.filter(v => v.data && v.data.roles.includes(this.auth.getUser().userRole));
    this.auth.user$.subscribe(value => {
      if(value) {
        this.routes = routes.filter(v => v.data && v.data.roles.includes(value.userRole));
      }else{
        this.routes = [];
      }
    });
  }
}
