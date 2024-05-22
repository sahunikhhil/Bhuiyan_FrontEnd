import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AbhilekhDurustiPanjiRegisterComponent } from './abhilekh-durusti-panji-register/abhilekh-durusti-panji-register.component';
import { DemoComponent } from './demo/demo.component';
import { PropertyRegistrationComponent } from './property-registration/property-registration.component';
//import { PropertyRegistrationComponent } from './property-registration/PropertyRegistrationComponent';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AbhilekhDurustiPanjiRegisterComponent,
    DemoComponent,
    PropertyRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
