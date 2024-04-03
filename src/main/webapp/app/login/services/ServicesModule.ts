import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';
import { Service6Component } from './service6/service6.component';
import { SdprComponent } from './service1/sdpr/sdpr.component';
import { Service7Component } from './service7/service7.component';

@NgModule({
  declarations: [
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Service5Component,
    Service6Component,
    SdprComponent,
    Service7Component
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'governmentSchemas/:itemName',
        component: Service1Component,
      },
      {
        path: 'turnkeyProjectSetup/:itemName',
        component:SdprComponent ,
      },
      {
        path: 'newProductDevelopment',
        component: Service7Component,
      },
      {
        path: 'licensingRegulatoryServices/mandatory/:itemName',
        component: Service6Component,
      },
      {
        path: 'licensingRegulatoryServices/Certifications/:itemName',
        component: Service6Component,
      },
      {
        path: 'financialServices/:itemName',
        component: Service2Component,
      },
      {
        path: 'technicalServices',
        component: Service3Component,
      },
      {
        path: 'auditingTrainingServices/:itemName',
        component: Service5Component,
      },
      {
        path: 'valueAddedService/:itemName',
        component: Service4Component,
      },
    ]),
  ],
})
export class ServiceModule {}
