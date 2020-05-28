import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '@app/@core/services/http.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  data: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'type', 'login', 'password', 'hours', 'actions'];

  constructor(private httpService: HttpService<any>) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    // this.httpService.findAll('').subscribe(res => {
    //   this.data = new MatTableDataSource<any>(res);
    // });
  }

}
