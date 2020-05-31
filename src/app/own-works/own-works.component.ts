import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '@app/@core/services/http.service';

@Component({
  selector: 'app-own-works',
  templateUrl: './own-works.component.html',
  styleUrls: ['./own-works.component.scss']
})
export class OwnWorksComponent implements OnInit {

  data: MatTableDataSource<any>;
  displayedColumns = ['id', 'type', 'name', 'description', 'coefficient'/*, 'actions'*/];
  translatedCategories = {
    DEFAULT: 'Звичайна',
    PER_STUDENT: 'Наукова діяльність по студенту',
    PER_GROUP: 'Наукова діяльність по групі',
    PER_PAGE: 'Робота в університеті'
  };

  constructor(private httpService: HttpService<any>) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.httpService.findAll('work').subscribe(res => {
      this.data = new MatTableDataSource<any>(res);
    });
  }

}
