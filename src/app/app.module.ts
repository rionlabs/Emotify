import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {BannerComponent} from './components/home/banner/banner.component';
import {HomeComponent} from './components/home/home.component';
import {EmoticonsComponent} from './components/home/emoticons/emoticons.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

import {FirebaseConfigObj} from "../environments/firebase";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";

import {MatToolbarModule} from "@angular/material";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        BannerComponent,
        HomeComponent,
        EmoticonsComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(FirebaseConfigObj, 'Emotify'),
        MatToolbarModule
    ],
    providers: [
        AngularFireDatabase,
        AngularFireDatabaseModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
