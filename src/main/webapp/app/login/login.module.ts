import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from './login.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutKnowmoreComponent } from './about-knowmore/about-knowmore.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'achievement',
        component: LoginComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'about',
        component: AboutKnowmoreComponent,
      },
    ]),
  ],
  declarations: [LoginComponent, ContactComponent],
})
export class LoginModule {}
