import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StatisticComponent} from '@app/statistic/statistic.component';
import {TeacherStatisticComponent} from '@app/teacher-statistic/teacher-statistic.component';
import {TeacherFormComponent} from '@app/teacher-form/teacher-form.component';
import {TemplatesComponent} from '@app/templates/templates.component';
import {LoginComponent} from '@app/login/login.component';
import {TemplateFormComponent} from '@app/template-form/template-form.component';
import {AddWorkComponent} from '@app/add-work/add-work.component';


export const routes: Routes = [
  {
    path: 'statistic', component: StatisticComponent, data: {
      icon: 'group',
      text: 'Статистика',
    }
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
    path: 'template', component: TemplateFormComponent, data: {
      icon: 'add',
      text: 'Додати шаблон',
    }
  },
  {
    path: 'add-work', component: AddWorkComponent, data: {
      icon: 'add',
      text: 'Додати роботу',
    }
  },
  {
    path: 'teacher', component: TeacherStatisticComponent, data: {
      icon: 'add',
      text: 'Інфа про викладача темп',
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
