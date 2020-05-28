import {NgModule} from '@angular/core';
import {PreLoaderDirective} from './pre-loader.directive';


@NgModule({
  declarations: [PreLoaderDirective],
  exports: [PreLoaderDirective],
  imports: []
})
export class DirectiveModule {
}
