import {Component, OnInit} from '@angular/core';
import {AppService} from '@app/@core/services/app.service';
import {AuthService} from '@app/@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teacher-activity';

  isLoad = true;

  constructor(private app: AppService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.app.isLoading$.subscribe(load => {
      setTimeout(() => this.isLoad = load, 500);
    });
    const auth = this.auth.isAuth();
    if (auth) {
      this.auth.getCurrentUser().subscribe();
    }
  }

}
