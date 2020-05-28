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
    this.routes = this.routes.filter(v => v.data);
  }
}
