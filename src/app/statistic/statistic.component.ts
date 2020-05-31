import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '@app/@core/services/http.service';
import {AuthService} from "@app/@core/services/auth.service";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  data: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'type', 'login', 'hours', 'actualHours'/*, 'actions'*/];
  userRole: string = '';

  constructor(private httpService: HttpService<any>, private auth: AuthService) {
  }

  ngOnInit(): void {
    let user = this.auth.getUser();
    if(user)
    this.userRole = user.userRole;
    this.auth.user$.subscribe(value => {
      if (value)
        this.userRole = value.userRole;
      else
        this.userRole = '';
    });
    this.load();
  }

  load() {
    this.httpService.findAll('professor/calculate').subscribe(res => {
      this.data = new MatTableDataSource<any>(res.map(value => {
        return {
          id: value.professor.id,
          name: `${value.professor.firstName} ${value.professor.lastName}`,
          type: value.professor.loadStandard.name,
          login: value.professor.username,
          hours: value.professor.loadStandard.load,
          actualHours: Math.round(value.calculatedLoad),
        };
      }));
    });
  }

}
