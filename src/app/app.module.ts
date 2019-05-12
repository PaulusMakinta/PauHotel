import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { ResturantsComponent } from './food-beverage/resturants/resturants.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import {CelebrationsComponent} from './celebrations/celebrations.component';
import {OffersComponent} from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    ResturantsComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    ResortActivitiesComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    SignupComponent,
    SigninComponent,
    AuthComponent,
    CelebrationsComponent,
    OffersComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
