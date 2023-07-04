import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProfileContentsComponent } from './my-profile/profile-contents/profile-contents.component';
import { ProfilePortifolioComponent } from './my-profile/profile-contents/profile-portifolio/profile-portifolio.component';
import { ProfileSkillsComponent } from './my-profile/profile-contents/profile-skill/profile-skills.component';
import { ProfileDetailsComponent } from './my-profile/profile-details/profile-details.component';
import { ProfileFactsComponent } from './my-profile/profile-facts/profile-facts.component';
import { ProfileInfoComponent } from './my-profile/profile-info/profile-info.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [	
    AppComponent,
    MyProfileComponent,
    ProfileFactsComponent,
    ProfileInfoComponent,
    ProfileDetailsComponent,
    ProfileContentsComponent,
    ProfilePortifolioComponent,
    ProfileSkillsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
