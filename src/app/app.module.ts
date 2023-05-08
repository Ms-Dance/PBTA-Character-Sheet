import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.route';
import { FormsModule } from '@angular/forms';
import { MotwComponent } from './motw/motw.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
    declarations: [
        AppComponent,
        MotwComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        AutosizeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
