import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterAngularApplicationSharedLibsModule,
  JhipsterAngularApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterAngularApplicationSharedLibsModule, JhipsterAngularApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterAngularApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterAngularApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterAngularApplicationSharedModule
    };
  }
}
