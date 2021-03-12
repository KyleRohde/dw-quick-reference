import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoveCardComponent } from './components/move-card/move-card.component';
import { ClassCardComponent } from './components/class-card/class-card.component';
import { SpellCardComponent } from './components/spell-card/spell-card.component';
import { HomePage } from './pages/home.component';
import { MovesPage } from './pages/moves.component';
import { ClassesPage } from './pages/classes.component';
import { SpellsPage } from './pages/spells.component';

@NgModule({
  declarations: [
    AppComponent,
    MoveCardComponent,
    ClassCardComponent,
    SpellCardComponent,
    HomePage,
    MovesPage,
    ClassesPage,
    SpellsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
