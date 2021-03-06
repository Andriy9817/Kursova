import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {HttpService} from '@app/@core/services/http.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

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
    this.httpService.findAll('work/patterns').subscribe(res => {
      this.data = new MatTableDataSource<any>(res);
    });
  }

}
