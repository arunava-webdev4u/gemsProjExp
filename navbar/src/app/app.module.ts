import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*


imports: [

]
                // "node_modules/bootstrap/dist/js/bootstrap.min.js"
*/