import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { salonlarComponent } from './components/salonlar/salonlar.component';
import { SalonlarService } from './services/salonlar.service';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    salonlarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule        
  ],
  providers: [SalonlarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
