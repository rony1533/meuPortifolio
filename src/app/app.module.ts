import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileContentsComponent } from './my-profile/profile-contents/profile-contents.component';
import { ProfilePortifolioComponent } from './my-profile/profile-contents/profile-portifolio/profile-portifolio.component';
import { ProfileDetailsComponent } from './my-profile/profile-details/profile-details.component';
import { ProfileFactsComponent } from './my-profile/profile-facts/profile-facts.component';
import { ProfileInfoComponent } from './my-profile/profile-info/profile-info.component';
import { TooltipModule } from 'primeng/tooltip';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [	
    AppComponent,
    MyProfileComponent,
    ProfileFactsComponent,
    ProfileInfoComponent,
    ProfileDetailsComponent,
    ProfileContentsComponent,
    ProfilePortifolioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule,
    TimelineModule,
    CardModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
