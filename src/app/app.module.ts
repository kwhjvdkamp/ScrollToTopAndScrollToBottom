import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ScrollBottomComponent } from './scroll-bottom/scroll-bottom.component';


@NgModule({
  /**
   * imports: list of 'modules' >> NOT 'components' or 'services'
   */
  imports: [ 
    BrowserModule, 
    FormsModule 
  ],
  /**
   * declarations: list of 'components' >> NOT 'modules' or 'services'
   */
  declarations: [ 
    AppComponent,  
    HomeComponent, 
    ScrollTopComponent, 
    ScrollBottomComponent 
  ],
  /**
   * providers: list of 'services' >> NOT 'components' or 'modules' 
   * */
  providers: [
  ],

  /** bootstrap (as verb): metaphor for implementing the 'AppComponent' 
   *  to render the 'app' successfull  
   * */
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
