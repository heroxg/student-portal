import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LeftasideComponent } from './shared/leftaside/leftaside.component';
import { RightasideComponent } from './shared/rightaside/rightaside.component';
import { AdditionalNavComponent } from './shared/additional-nav/additional-nav.component';
import { ComplaintsLinkComponent } from './shared/complaints-link/complaints-link.component';
import { MainContentComponent } from './shared/main-content/main-content.component';
import { NewsUpdatesComponent } from './shared/news-updates/news-updates.component';
import { CourseRegStatusComponent } from './shared/course-reg-status/course-reg-status.component';
import { RangerSliderComponent } from './components/ranger-slider/ranger-slider.component';
import { NewsBriefComponent } from './components/news-brief/news-brief.component';
import { StudentBoardComponent } from './shared/student-board/student-board.component';
import { NavTabComponent } from './shared/nav-tab/nav-tab.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { ButtonComponent } from './shared/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftasideComponent,
    RightasideComponent,
    AdditionalNavComponent,
    ComplaintsLinkComponent,
    MainContentComponent,
    NewsUpdatesComponent,
    CourseRegStatusComponent,
    RangerSliderComponent,
    NewsBriefComponent,
    StudentBoardComponent,
    NavTabComponent,
    CourseListComponent,
    ButtonComponent,
    LoginComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
