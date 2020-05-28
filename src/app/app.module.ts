import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeacherFormComponent} from './teacher-form/teacher-form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {TopNavComponent} from '@app/top-nav/top-nav.component';
import {SideNavComponent} from '@app/side-nav/side-nav.component';
import {StatisticComponent} from './statistic/statistic.component';
import {TemplatesComponent} from './templates/templates.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {TeacherStatisticComponent} from './teacher-statistic/teacher-statistic.component';
import {LoginComponent} from '@app/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DirectiveModule} from '@app/@directive/directive.module';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {SideNavItemComponent} from '@app/side-nav/side-nav-item/side-nav-item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from '@app/@core/services/interceptor.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BreadcrumbsModule} from '@app/breadcrumbs/breadcrumbs.module';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {AddWorkComponent} from './add-work/add-work.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherFormComponent,
    TopNavComponent,
    SideNavItemComponent,
    SideNavComponent,
    StatisticComponent,
    TemplatesComponent,
    TemplateFormComponent,
    TeacherStatisticComponent,
    LoginComponent,
    AddWorkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    DirectiveModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    BreadcrumbsModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
