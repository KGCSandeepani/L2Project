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
      { path: 'adminViewCompany', component: AdminViewCompanyComponent }
    ]
  },
  { path: 'companyProfile', component: CompanyProfileComponent },
  { path: 'companySignup', component: CompanySignupComponent },
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}