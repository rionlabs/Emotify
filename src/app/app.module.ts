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
import {AboutComponent} from './components/about/about.component';

import {AngularFireModule} from "angularfire2";

import {FirebaseConfigObj} from "../environments/firebase";
import {AngularFireDatabase, AngularFireDatabaseModule} from "angularfire2/database";
import {ContentsService} from "./services/contents.service";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        BannerComponent,
        HomeComponent,
        EmoticonsComponent,
        NotFoundComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(FirebaseConfigObj, 'Emotify')
    ],
    providers: [
        AngularFireDatabase,
        AngularFireDatabaseModule,
        ContentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
