import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NpnSliderModule } from "npn-slider";
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { BeersService } from "./config/beers.service";

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { AdvancedsearchComponent } from './components/advancedsearch/advancedsearch.component';
import { BeerItemComponent } from './shared/beer-item/beer-item.component';
import { BeerDialogComponent } from './shared/beer-dialog/beer-dialog.component';
import { SliderangeComponent } from './shared/sliderange/sliderange.component';
import { BodyComponent } from './shared/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouriteComponent,
    AdvancedsearchComponent,
    BeerItemComponent,
    BeerDialogComponent,
    SliderangeComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NpnSliderModule,
    FormsModule,
    NgbModule.forRoot(),
    routing
    //AppRoutingModule
  ],
  providers: [
    appRoutingProviders,
    NgbActiveModal,
    BeersService
  ],
  entryComponents: [
    BeerDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
