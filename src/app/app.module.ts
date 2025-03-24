import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileContentsComponent } from './my-profile/profile-contents/profile-contents.component';
import { ProfilePortfolioComponent as ProfilePortfolioComponent } from './my-profile/profile-contents/profile-portfolio/portfolio';
import { ProfileDetailsComponent } from './my-profile/profile-details/profile-details.component';
import { ProfileFactsComponent } from './my-profile/profile-facts/profile-facts.component';
import { ProfileInfoComponent } from './my-profile/profile-info/profile-info.component';
import { TooltipModule } from 'primeng/tooltip';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './service/data.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileFooterComponent } from './my-profile/profile-footer/profile-footer.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [			
    AppComponent,
    MyProfileComponent,
    ProfileFactsComponent,
    ProfileInfoComponent,
    ProfileDetailsComponent,
    ProfileContentsComponent,
    ProfilePortfolioComponent,
    NotFoundComponent,
    ProfileFooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    TimelineModule,
    CardModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
