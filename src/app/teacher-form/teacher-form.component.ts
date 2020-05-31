import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '@app/@core/services/http.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {

  id: number;
  form: FormGroup;
  isSubmit = false;
  roles: { id: number, name: string }[] = [];

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private http: HttpService<any>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      loadStandard: new FormGroup({id: new FormControl('', [Validators.required])}),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.id = +this.activatedRoute.snapshot.queryParams.id;
    if (this.id) {
      this.http.findOne('professor', this.id).toPromise().then(res => {
        this.form.patchValue(res);
      });
    }
    this.http.findAll('load').toPromise().then(value => {
      this.roles = value;
    })
  }

  submit(e) {
    e.preventDefault();
    if (this.isSubmit || this.form.invalid) {
      return;
    }
    this.isSubmit = true;
    this.http.create('professor', this.form.getRawValue());
  }

}
