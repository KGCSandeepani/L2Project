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


@NgModule({
  declarations: [
    AppComponent,    
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
    StudentAddSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AdminAddStudentServiceService,
              ReadUnamePswServiceService,
              AdminDeleteStudentServiceService,
              AdminAddStaffServiceService,
              AdminUpdateStudentService,
              CompanySignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
