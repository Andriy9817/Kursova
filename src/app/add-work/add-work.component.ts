import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "@app/@core/services/http.service";

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.scss']
})
export class AddWorkComponent implements OnInit {

  id: number;
  form: FormGroup;
  isSubmit = false;
  categories: string[] = [];
  patterns: {name:string,description:string,coefficient:string,calculationType:string}[] = [];
  translatedCategories = {
    DEFAULT: 'Звичайна',
    PER_STUDENT: 'Наукова діяльність по студенту',
    PER_GROUP: 'Наукова діяльність по групі',
    PER_PAGE: 'Робота в університеті'
  };
  selectedCategory:string = '';

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private http: HttpService<any>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl({value:'', disabled:true}, [Validators.required]),
      description: new FormControl({value:'', disabled:true}, [Validators.required]),
      coefficient: new FormControl({value:'', disabled:true}, [Validators.required]),
      groupsCount: new FormControl(''),
      studentsCount: new FormControl(''),
      pages: new FormControl(''),
      authors: new FormControl(''),
      calculationType: new FormControl({value:'', disabled:true}, [Validators.required])
    });
    this.form.valueChanges.subscribe(value => {
      console.log(this.form.getRawValue());
      this.selectedCategory = this.form.getRawValue().calculationType;
    });
    this.http.findAll('work/categories').toPromise().then(value => {
      this.categories = value;
    });
    this.http.findAll('work/patterns').toPromise().then(value => {
      this.patterns = value;
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
    this.http.create('work', this.form.getRawValue()).then(value =>
    console.log(value));
    this.isSubmit = true;
  }

  selectPattern(e){
    console.log(e.value);
    this.form.patchValue(e.value);
  }

}
