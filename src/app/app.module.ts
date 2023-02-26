import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HeroSectionComponent } from './pages/hero-section/hero-section.component';
import { ListSectionComponent } from './pages/list-section/list-section.component';
import { PlacesSectionComponent } from './pages/places-section/places-section.component';
import { SeoSectionComponent } from './pages/seo-section/seo-section.component';
import { CardsSectionComponent } from './pages/cards-section/cards-section.component';
import { StepsSectionComponent } from './pages/steps-section/steps-section.component';
import { DropdownCompComponent } from './components/dropdown-comp/dropdown-comp.component';
import { ScheduleCallComponent } from './pages/schedule-call/schedule-call.component';
import { SuccessStoriesComponent } from './pages/success-stories/success-stories.component';
import { GaranteeSectionComponent } from './pages/garantee-section/garantee-section.component';
import { SchedulebuttonComponent } from './components/schedulebutton/schedulebutton.component';
import { WorkingSessionComponent } from './pages/working-session/working-session.component';
import { FooterSessionComponent } from './pages/footer-session/footer-session.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroSectionComponent,
    ListSectionComponent,
    PlacesSectionComponent,
    SeoSectionComponent,
    CardsSectionComponent,
    StepsSectionComponent,
    DropdownCompComponent,
    ScheduleCallComponent,
    SuccessStoriesComponent,
    GaranteeSectionComponent,
    SchedulebuttonComponent,
    WorkingSessionComponent,
    FooterSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
