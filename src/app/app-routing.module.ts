import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StatisticComponent} from '@app/statistic/statistic.component';
import {TeacherStatisticComponent} from '@app/teacher-statistic/teacher-statistic.component';
import {TeacherFormComponent} from '@app/teacher-form/teacher-form.component';
import {TemplatesComponent} from '@app/templates/templates.component';
import {LoginComponent} from '@app/login/login.component';


export const routes: Routes = [
  {
    path: 'statistic', component: StatisticComponent, data: {
      icon: 'group',
      text: 'Статистика',
    }
  },
  {
    path: 'teacher', component: TeacherStatisticComponent
  },
  {
    path: 'form', component: TeacherFormComponent, data: {
      icon: 'add',
      text: 'Додати користувача',
    }
  },
  {
    path: 'templates', component: TemplatesComponent, data: {
      icon: 'group',
      text: 'Шаблони',
    }
  },
  {
    path: 'template', component: TeacherFormComponent, data: {
      icon: 'add',
      text: 'Додати шаблон',
    }
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo: 'statistic', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
