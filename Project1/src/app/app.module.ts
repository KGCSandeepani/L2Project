import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { AdminHomePageComponent } from './component/admin-home-page/admin-home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminAddStudentComponent } from './component/admin-add-student/admin-add-student.component';
import { AdminViewStudentComponent } from './component/admin-view-student/admin-view-student.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddStudentServiceService } from './component/Services/admin-add-student-service.service';
import { ReadUnamePswServiceService } from './component/Services/read-uname-psw-service.service';
import { AdminDeleteStudentServiceService } from './component/Services/admin-delete-student-service.service';
import { AdminUpdateStudentService } from './component/Services/admin-update-student.service';
import { AdminChangeNoOfCompanyService } from './component/Services/admin-change-no-of-company.service';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AdminAddStaffComponent } from './component/admin-add-staff/admin-add-staff.component';
import { AdminViewSupervisorComponent } from './component/admin-view-supervisor/admin-view-supervisor.component';
import { RequestedCompanyComponent } from './component/requested-company/requested-company.component';
import { AdminViewCompanyComponent } from './component/admin-view-company/admin-view-company.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { CompanySignupComponent } from './component/company-signup/company-signup.component';
import { AdminAddStaffServiceService } from './component/Services/admin-add-staff-service.service';
import { CompanySignupService } from './component/Services/company-signup.service';
import { CompanyProfileStudentlistComponent } from './component/company-profile-studentlist/company-profile-studentlist.component';
import { CompanyProfileSelectedstudentComponent } from './component/company-profile-selectedstudent/company-profile-selectedstudent.component';
import { CompanyProfileHomeComponent } from './component/company-profile-home/company-profile-home.component';
import { StudentComponent } from './component/student/student.component';
import { StudentAddDetailComponent } from './component/student-add-detail/student-add-detail.component';
import { StudentEditDetailComponent } from './component/student-edit-detail/student-edit-detail.component';
import { StudentViewDetailComponent } from './component/student-view-detail/student-view-detail.component';
import { StudentAddSuccessComponent } from './component/student-add-success/student-add-success.component';
import { TitleComponent } from './component/title/title.component';
import { ChatASComponent } from './component/chat-a-s/chat-a-s.component';
import { FeedASComponent } from './component/feed-a-s/feed-a-s.component';
import { MessageASComponent } from './component/message-a-s/message-a-s.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireStorageModule } from 'angularfire2/storage';

import { AfterViewChecked, ElementRef, ViewChild} from '@angular/core'
import { AuthChatASService } from './component/Services/auth-chat-a-s.service';
import { ChatServiceASService} from './component/Services/chat-service-a-s.service'
import { BroadcastingMessagesService} from './component/Services/broadcasting-messages.service'

import { environment} from '../environments/environment';

import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { UserListComponent } from './component/user-list/user-list.component';

import { DataPassService } from './component/Services/data-pass.service';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import { AdminAnalysisComponent } from './component/admin-analysis/admin-analysis.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { NgxNotificationComponent } from 'ngx-notification';
import { AdminSettingComponent } from './component/admin-setting/admin-setting.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CompanySignupSuccessComponent } from './component/company-signup-success/company-signup-success.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {TabModule} from 'angular-tabs-component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatTabsModule,
  MatCardModule,
  MatGridListModule,
  MatProgressBarModule,
  MatTableDataSource,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatRadioModule
} from '@angular/material';
import { AdminViewFullStudentComponent } from './component/admin-view-full-student/admin-view-full-student.component';
import { StuAnalysisComponent } from './component/stu-analysis/stu-analysis.component';
import { CompanyAnalysisComponent } from './component/company-analysis/company-analysis.component';
import { CompanyViewStuFullComponent } from './component/company-view-stu-full/company-view-stu-full.component';
import { StudentSettingComponent } from './component/student-setting/student-setting.component';
import { CompanySettingComponent } from './component/company-setting/company-setting.component';
import { StudentCampanyListComponent } from './component/student-campany-list/student-campany-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { StudentConfirmInternshipComponent } from './component/student-confirm-internship/student-confirm-internship.component';
import { CompanyProfileConfirmStudentlistComponent } from './component/company-profile-confirm-studentlist/company-profile-confirm-studentlist.component';
//import {TabsTemplateLabelExample} from './app/tabs-template-label-example';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { SupervisorProfileHomeComponent } from './component/supervisor-profile-home/supervisor-profile-home.component';
import { SupervisorProfileViewCompanyComponent } from './component/supervisor-profile-view-company/supervisor-profile-view-company.component';
import { SupervisorProfileViewFullStudentComponent } from './component/supervisor-profile-view-full-student/supervisor-profile-view-full-student.component';
import { SupervisorProfileViewStudentComponent } from './component/supervisor-profile-view-student/supervisor-profile-view-student.component';
import { SupervisorProfileAnalysisComponent } from './component/supervisor-profile-analysis/supervisor-profile-analysis.component';
import { SupervisorProfileSettingsComponent } from './component/supervisor-profile-settings/supervisor-profile-settings.component';
import { SupervisorChangePasswordServiceService } from './component/Services/supervisor-change-password-service.service';
import { SupervisorViewCompanyServiceService } from './component/Services/supervisor-view-company-service.service';
import { LoggingSupervisorServiceService } from './component/Services/logging-supervisor-service.service';
import { SupervisorProfileComponent } from './component/supervisor-profile/supervisor-profile.component';
import { SupervisiorDashboardComponent } from './component/supervisior-dashboard/supervisior-dashboard.component';
import { ViewAdminsService } from './component/Services/view-admins.service';
import { UserListService } from './component/Services/user-list.service';
import { SupervisorViewFeedbackComponent } from './component/supervisor-view-feedback/supervisor-view-feedback.component';
import { FusionChartsModule } from 'angular-fusioncharts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';


// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
//import { ConfirmationDialogServiceComponent } from './component/confirmation-dialog-service/confirmation-dialog-service.component';
import { ConfirmationDialogComponentComponent } from './component/confirmation-dialog-component/confirmation-dialog-component.component';
import { CompanyFeedbackComponent } from './component/company-feedback/company-feedback.component';
import { AdminViewCompanyFeedbackComponent } from './component/admin-view-company-feedback/admin-view-company-feedback.component';
import { CompanyStoriesComponent } from './component/company-stories/company-stories.component';

// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)


@NgModule({
  declarations: [
    AppComponent, 
    NgxNotificationComponent,   
    LoginComponent,
    AdminHomePageComponent,
    AdminAddStudentComponent,
    AdminViewStudentComponent,
    AddUserComponent,
    AdminAddStaffComponent,
    AdminViewSupervisorComponent,
    RequestedCompanyComponent,
    AdminViewCompanyComponent,
    CompanyProfileComponent,
    CompanySignupComponent,
    CompanyProfileStudentlistComponent,
    CompanyProfileSelectedstudentComponent,
    CompanyProfileHomeComponent,
    StudentComponent,
    StudentAddDetailComponent,
    StudentEditDetailComponent,
    StudentViewDetailComponent,
    StudentAddSuccessComponent,
    TitleComponent,
    ChatASComponent,
    FeedASComponent,
    MessageASComponent,
    ChatRoomComponent,
    UserListComponent,
    AdminAnalysisComponent,
    AdminSettingComponent,
    CompanySignupSuccessComponent,
    AdminViewFullStudentComponent,
    StuAnalysisComponent,
    CompanyAnalysisComponent,
    CompanyViewStuFullComponent,
    StudentSettingComponent,
    CompanySettingComponent,
    StudentCampanyListComponent,
    DashboardComponent,
    FeedbackComponent,
    StudentConfirmInternshipComponent,

    SupervisorProfileComponent,
    SupervisorProfileHomeComponent,
    SupervisorProfileViewCompanyComponent,
    SupervisorProfileViewFullStudentComponent,
    SupervisorProfileViewStudentComponent,
    SupervisorProfileAnalysisComponent,
    SupervisorProfileSettingsComponent,
    SupervisiorDashboardComponent,
    CompanyProfileStudentlistComponent,
   // ConfirmationDialogComponentComponent,
    CompanyProfileConfirmStudentlistComponent,
    
    SupervisorViewFeedbackComponent,
    
    StudentDashboardComponent,
    ConfirmationDialogComponentComponent,
    CompanyFeedbackComponent,
    AdminViewCompanyFeedbackComponent,
    CompanyStoriesComponent,
    
    
    
  //  MatTabsModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    SpreadSheetsModule,
    ChartsModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule,MatTabsModule,MatGridListModule,MatCardModule,MatProgressBarModule
   ,MatTableModule,MatFormFieldModule, MatInputModule,MatSortModule,MatAutocompleteModule,MatDialogModule,
   FusionChartsModule 
   ,MatTableModule,MatFormFieldModule, MatInputModule,MatSortModule,MatAutocompleteModule,MatRadioModule,
   NgbModule.forRoot(),
  
  ],
  providers: [AdminAddStudentServiceService,
              ReadUnamePswServiceService,
              AdminDeleteStudentServiceService,
              AdminAddStaffServiceService,
              AdminUpdateStudentService,
              CompanySignupService,AuthChatASService, 
              ChatServiceASService,
              DataPassService,
              

              BroadcastingMessagesService,
              SupervisorChangePasswordServiceService,
              SupervisorViewCompanyServiceService,
              LoggingSupervisorServiceService,
              ViewAdminsService, UserListService,
              AdminChangeNoOfCompanyService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponentComponent ]
})
export class AppModule { }
