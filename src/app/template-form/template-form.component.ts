import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '@app/@core/services/http.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  id: number;
  form: FormGroup;
  isSubmit = false;
  categories: string[] = [];
  translatedCategories = {
    DEFAULT:'Звичайна',
    PER_STUDENT:'Наукова діяльність по студенту',
    PER_GROUP:'Наукова діяльність по групі',
    PER_PAGE:'Робота в університеті'
  };

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private http: HttpService<any>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      coefficient:new FormControl('', [Validators.required]),
      // groupsCount:new FormControl('', [Validators.required]),
      // studentsCount:new FormControl('', [Validators.required]),
      // pages:new FormControl('', [Validators.required]),
      // authors:new FormControl('', [Validators.required]),
      calculationType:new FormControl('', [Validators.required])
    });
    this.http.findAll('work/categories').toPromise().then(value => {
      this.categories = value;
    });
    this.id = +this.activatedRoute.snapshot.queryParams.id;
    if (this.id) {
      this.http.findOne('', this.id).toPromise().then(res => {
        this.form.patchValue(res);
      });
    }
  }

  submit(e) {
    e.preventDefault();
    if (this.isSubmit || this.form.invalid) {
      return;
    }
    this.http.create('work',this.form.getRawValue());
    this.isSubmit = true;
  }

}
