import { Component } from '@angular/core';

@Component({
  selector: 'jhi-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  tools = [
    { image: '../../../content/images/assets/foodProcess/food1.png', title: 'Food concept selection', description: 'Assisting the new product selection as per the current trend in the market.' },
    { image: '../../../content/images/assets/foodProcess/food2.png', title: 'New Product development / Formulation', description: 'Innovative & unique product development services.' },
    { image: '../../../content/images/assets/foodProcess/food3.png', title: 'Contract Manufacturing Identification', description: 'Assist in contract manufacturer selection with respect to product category, project capacity.' },
    { image: '../../../content/images/assets/foodProcess/food4.jpg', title: 'Packaging Design and Branding', description: 'Packaging design and branding with in-house highly skilled food packaging designers.' },
    { image: '../../../content/images/assets/foodProcess/food5.jpg', title: 'Food Packaging Solutions', description: 'Provide current packaging trends & assistance in selection of packaging for designated product category.' },
    { image: '../../../content/images/assets/foodProcess/food6.jpg', title: 'Scale Up Trials / Food Industry Implementation', description: 'Help client to go from lab to market with scale up trials of new products.' },
    { image: '../../../content/images/assets/foodProcess/food7.png', title: 'Government License', description: 'Provide all mandatory licenses for setting up own plant/contract manufacturing/marketing of products.' }
  ];
}
