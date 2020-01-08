import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'MovingIn'),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  providers: [AngularFirestore, MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
