import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeGameComponent } from './home-game/home-game.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: HomeGameComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
