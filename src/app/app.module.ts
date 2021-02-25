import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoveCardComponent } from './components/move-card/move-card.component';
import { ClassCardComponent } from './components/class-card/class-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MoveCardComponent,
    ClassCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
