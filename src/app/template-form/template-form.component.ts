import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
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

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private http: HttpService<any>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({});
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
    this.isSubmit = true;
  }

}
