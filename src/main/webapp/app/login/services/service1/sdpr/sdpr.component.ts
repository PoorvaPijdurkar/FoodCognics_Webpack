import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'jhi-sdpr',
  templateUrl: './sdpr.component.html',
  styleUrls: ['./sdpr.component.scss'],
})
export class SdprComponent implements OnInit {
  selectedItem = '';
  selectedImage: any;

  constructor(private route: ActivatedRoute,private router: Router) {}

  navigateTo(relativePath: string): void {
    this.router.navigate([relativePath], { skipLocationChange: true });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedItem = params['itemName'];
      this.selectItem(this.selectedItem);
    });
  }

  selectItem(selectedItem: string):void {

    switch (selectedItem) {
      case 'basis-of-design':
        this.selectedImage =
          '../../../../../content/images/assets/GOVT-services/Basis Of Design.jpg';
        break;
      case 'Building-Design-Phase':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Building Design Phase.jpg';
        break;
      case 'Land-Selection':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Land Selection FoodCognics.jpg';
        break;
      case 'Machinery-Selection':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Machinery selection FoodCognics.jpg';
        break;
      case 'Architectural-Service':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Architectural service FooCognics.jpg';
        break;
      case 'Vendor-Selection-&-Management':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Vendor Selection and management.jpg';
        break;
      case 'Site-supervision':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Site Supervision FoodCognics.jpg';
        break;
      case 'Preparation-Of-progress-report':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Progress Report.jpg';
        break;
      case 'Value-Engineering':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Value Engineering.jpg';
        break;
      case 'Master-Project-Budget-preparation':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Master Project Budget Preparation.jpg';
        break;
      case 'Preparation-of-Implementation-Schedule':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Master Project Budget Preparation.jpg';
        break;
      case 'Documents-&-Handover-Procedures':
        this.selectedImage =
        '../../../../../content/images/assets/Services-Images/Documents and handover Procedure.jpg';
        break;
      default:
        this.selectedImage = '';
        break;
    }
  }
}
