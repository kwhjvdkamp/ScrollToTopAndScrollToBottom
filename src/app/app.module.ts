import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ScrollBottomComponent } from './scroll-to-bottom/scroll-to-bottom.component';
import { ScrollTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
    /**
     * imports: list of 'modules' >> NOT 'components' or 'services'
     */
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,

        MaterialModule
    ],
    /**
     * declarations: list of 'components' >> NOT 'modules' or 'services'
     */
    declarations: [
        AppComponent,
        HomeComponent,

        ScrollBottomComponent,
        ScrollTopComponent
    ],
    /**
     * providers: list of 'services' >> NOT 'components' or 'modules'
     * */
    providers: [
    ],

    /** bootstrap (as verb): metaphor for implementing the 'AppComponent'
     *  to render the 'app' successful
     * */
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
