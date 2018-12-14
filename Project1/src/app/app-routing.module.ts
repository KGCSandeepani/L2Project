import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent }   from './component/login/login.component';
import { AdminHomePageComponent } from './component/admin-home-page/admin-home-page.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AdminAddStudentComponent } from './component/admin-add-student/admin-add-student.component';
import { AdminAddStaffComponent } from './component/admin-add-staff/admin-add-staff.component';
import { AdminViewStudentComponent } from './component/admin-view-student/admin-view-student.component';
import { AdminViewSupervisorComponent } from './component/admin-view-supervisor/admin-view-supervisor.component';
import { RequestedCompanyComponent } from './component/requested-company/requested-company.component';
import { AdminViewCompanyComponent } from './component/admin-view-company/admin-view-company.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { CompanySignupComponent } from './component/company-signup/company-signup.component';
import { CompanyProfileStudentlistComponent } from './component/company-profile-studentlist/company-profile-studentlist.component';
import { CompanyProfileSelectedstudentComponent } from './component/company-profile-selectedstudent/company-profile-selectedstudent.component';
import { CompanyProfileHomeComponent } from './component/company-profile-home/company-profile-home.component';
import { StudentComponent } from './component/student/student.component';
import { StudentAddDetailComponent } from './component/student-add-detail/student-add-detail.component';
import { StudentEditDetailComponent } from './component/student-edit-detail/student-edit-detail.component';
import { StudentViewDetailComponent } from './component/student-view-detail/student-view-detail.component';
import { StudentAddSuccessComponent } from './component/student-add-success/student-add-success.component';
import { ChatASComponent } from './component/chat-a-s/chat-a-s.component';
import { ChatRoomComponent } from './component/chat-room/chat-room.component';
import { FeedASComponent } from './component/feed-a-s/feed-a-s.component';
import { MessageASComponent } from './component/message-a-s/message-a-s.component';
import { AdminAnalysisComponent } from './component/admin-analysis/admin-analysis.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'adminHomePage', 
    component: AdminHomePageComponent,
    children: [
      { path: 'adminAddUser', 
        component: AddUserComponent,
        children:[
          { path: 'adminAddStudent', component: AdminAddStudentComponent },
          { path: 'adminAddStaff', component: AdminAddStaffComponent }
        ] },
      { path: 'adminViewStudent', component: AdminViewStudentComponent },
      { path: 'adminViewSupervisor', component: AdminViewSupervisorComponent },
      { path: 'requestedCompany', component: RequestedCompanyComponent },
      { path: 'adminViewCompany', component: AdminViewCompanyComponent },
      { path: 'adminAnalysis', component: AdminAnalysisComponent },
      { path: 'chat-room', component:  ChatRoomComponent},
      {path : 'userList', component:UserListComponent,
      children :[
       {path:'feed', component :FeedASComponent} 
      ]}
    ]
  },
  { 
    path: 'companyProfile', 
    component: CompanyProfileComponent,
    children :[
      { path: 'home', component: CompanyProfileHomeComponent },
      { path: 'studentlist', component: CompanyProfileStudentlistComponent },
      { path: 'selectedStudentDetail', component: CompanyProfileSelectedstudentComponent },
    ]
  },
  { path: 'companySignup', component: CompanySignupComponent },
  { 
    path: 'student', 
    component: StudentComponent,
    children :[
      { path: 'studentAdd', component: StudentAddDetailComponent },
      { path: 'studentAddSuccess', component: StudentAddSuccessComponent },
      { path: 'studentEdit', component: StudentEditDetailComponent },
      { path: 'studentView', component: StudentViewDetailComponent },
    ]
  },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}