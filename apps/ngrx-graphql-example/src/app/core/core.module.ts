import { NgModule, Optional, SkipSelf } from '@angular/core';
import {GraphqlModule} from './graphql.module';
import {NgRxModule} from './ngrx.module';

@NgModule({
  imports: [GraphqlModule, NgRxModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
