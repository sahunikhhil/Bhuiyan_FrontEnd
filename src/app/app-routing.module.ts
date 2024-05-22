import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AbhilekhDurustiPanjiRegisterComponent } from './abhilekh-durusti-panji-register/abhilekh-durusti-panji-register.component';
import { PropertyRegistrationComponent } from './property-registration/property-registration.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: AbhilekhDurustiPanjiRegisterComponent },
  { path: 'reg', component: PropertyRegistrationComponent },
  { path: 'demo', component: DemoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
