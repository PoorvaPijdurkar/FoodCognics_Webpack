import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta , Title} from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  apiLoaded = false;
  videoId2 = 'UnOUEePeVfM';
  count = 0;
  accuratecount = 0;
  revenuecount = 0;
  counter = 0;
  activeIndex = -1;
  
  //why us
  tools = [
    { name: 'Core Capabilities', imageSrc: '../../content/images/assets/GOVT-services/Core Capabilities.jpg' },
    { name: 'Client Confidentiality', imageSrc: '../../content/images/assets/GOVT-services/CONFIDENTIALITY.jpg' },
    { name: 'Focus On Client Success', imageSrc: '../../content/images/assets/GOVT-services/Client success.jpg' },
    { name: '100% Transparency', imageSrc: '../../content/images/assets/GOVT-services/Transperency.jpg'},
    { name: 'Team Of Experts', imageSrc: '../../content/images/assets/GOVT-services/Team Of Expert.jpg'},
  ];

  //services
  services = [
  {image: '../../content/images/assets/sector/turnkey.jpg',caption:'Turnkey project setup',link:"services/turnkeyProjectSetup/turnkeyProjectSetup", content:'We handle every aspect of factory design under one roof, encompassing Process, Building and Civil, Utilities, Electrical and Automation, Quality Assurance, and more.Our designs adhere to global standards for food safety and hygienic engineering.From the ground up, we construct new factories to the highest standards, ensuring that your food facility is not just built, but built to be a source of pride.' },
  { image: '../../content/images/assets/sector/project-report.jpg' , caption:'Detailed Project Report',link:"services/turnkeyProjectSetup/Preparation-Of-progress-report" ,content: 'A Detailed Project Report (DPR) for a food business typically includes comprehensive information about the proposed venture. Our hand on experienced on preparation of report with expertise, financial experts ,engg team, data analyst leads to success' },
  { image: '../../content/images/assets/sector/new-product.jpg', caption:'New Product Development',link:"services/newProductDevelopment" , content: 'Core expertise with the product development as well as standardization according to the FSSAI Norms we developed innovative products bt nurturing the idea in mind of client. 20 + years experienced food technologist team continuously upgrade their knowledge and form products that have match the expectation of client.' },
  ];

  //home
  slides = [
    { image: '../../content/images/assets/Home/homepage1.jpeg',  caption: 'Leading Food Consultant In India',},
    { image: '../../content/images/assets/Home/processing line.png', caption:'We are not just consultants we are' , caption1:"solution provider and Implementors."},
    { image: '../../content/images/assets/Home/homeimg2.jpg', caption:'Process Automation, Tech-enabled' , caption1:'Systems, Robotics in Food Processing.'},
    { image: '../../content/images/assets/sector/img3.avif', caption:'Build Feasible, Viable and smart', caption1:' Food Factories'},
    { image: '../../content/images/assets/GOVT-services/home.jpg', },
  ];

  //sectors
  slides1: any[] = [
    {
      title: 'Fruits-&-Vegetable',
      imageUrl: '../../content/images/assets/Fruits and Vegetable processing by foodcognics.jpg',
      text: 'Fruits & Vegetables',
    },
    {
      title: 'Cereal-Products',
      imageUrl: '../../content/images/assets/sector/cereals.jpg',
      text: 'Cereal Products',
    },
    {
      title: 'Functional-Food',
      imageUrl: '../../content/images/assets/sector/Standardised Food Product.jpg',
      text: 'Functional Food',
    },
    {
      title: 'Confectionary-Products',
      imageUrl: '../../content/images/assets/sector/Cocoa.png',
      text: 'Confectionary Products',
    },
  ]
  slides2: any[] = [
    {
      title: 'Meat-Polutry',
      imageUrl: '../../content/images/assets/sector/MeatPolutry.png',
      text: 'Meat Polutry',
    },
    {
      title: 'Milk-&-Dairy-Products',
      imageUrl: '../../content/images/assets/sector/Dairy.png',
      text: 'Milk & Dairy Products',
    },
    {
      title: 'Instant-Premixes',
      imageUrl: '../../content/images/assets/sector/instant-primixes.jpg',
      text: 'Instant Premixes',
    },
    {
      title: 'Frozen-Products',
      imageUrl: '../../content/images/assets/sector/frozen.jpg',
      text: 'Frozen Products',
    },
  ]
  slides3: any[] = [
    {
      title: 'Beverages-&-Packaged-drinking-water',
      imageUrl: '../../content/images/assets/sector/Beverages.jpg',
      text: 'Beverages & Packaged Dinking Water',

    },
    {
      title: 'Spices-&-Condiments',
      imageUrl: '../../content/images/assets/sector/Salts, spices, soups, sauces, salads and protein products.jpg',
      text: 'Spices & Condiments',
    },
    {
      title: 'Bakery-products',
      imageUrl: '../../content/images/assets/sector/bakery.jpg',
      text: 'Bakery Products',
    },
    {
      title: 'Sweeteners',
      imageUrl: '../../content/images/assets/sector/Sweetners.jpg',
      text: 'Sweeteners',
    },
  ]
  slides4: any[] = [
    {
      title: 'Fish-products',
      imageUrl: '../../content/images/assets/sector/fish.jpg',
      text: 'Fish Products',
    },
    {
      title: 'Eggs-products',
      imageUrl: '../../content/images/assets/sector/eggs.jpg',
      text: 'Eggs Products',
    },
    {
      title: 'Snacks-products',
      imageUrl: '../../content/images/assets/sector/INDIAN SNACKS & SAVOURIES PRODUCTS.jpg',
      text: 'Snacks Products',
    },
    {
      title: 'Fats-&-oils',
      imageUrl: '../../content/images/assets/sector/oil.jpg',
      text: 'Fats & Oil',
    },
  ]
  //
  items1: any[] = [
    {
      imageUrl: '../../content/images/assets/CLIENT/123.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/H.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/I.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/R.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/J.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/L.png',
    },
  ]
  items2: any[] = [
    {
      imageUrl: '../../content/images/assets/CLIENT/234.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/SB.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/M.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/N.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/K.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/P.png',

    },
  ]
  items3: any[] = [
    {
      imageUrl: '../../content/images/assets/CLIENT/890.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/A.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/AB.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/B.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/C.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/CD.png',
    },
  ]
  items4: any[] = [
    {
      imageUrl: '../../content/images/assets/CLIENT/D.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/E.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/F.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/456.jpg',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/IJ.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/qw.jpg',
    },
  ]
  items5: any[] = [
    {
      imageUrl: '../../content/images/assets/CLIENT/Q.jpg',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/S.jpg',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/SB.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/T.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/U.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/UI.png',
    },
  ]
  items6: any[] = [
    {
      imageUrl: '../../content/images/assets/CLIENT/X.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/V.jpg',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/Z.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/YY.jpg',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/Y.png',
    },
    {
      imageUrl: '../../content/images/assets/CLIENT/U.png',
    },
  ]


  faqs = [
    {
      question: "How can I start my food business?",
      answers: ["We provide end to end handholding services for food start-up. Our 12 Months handholding services will bring your dream into reality to know more."]
    },
    {
      question: "Where will I get government subsidies Information?",
      answers: ["There are various state and central government subsidies available in India under various scheme for setting up food processing business. MoFPI, NHB, NABARD, APEDA. SFAC  are few of the agencies provides subsidies under various schemes to know more."]
    },
    {
      question: "How To Chose a Food Product?",
      answers: ["We have very methodological approach for selecting a right product considering your investment, location, market potential etc. to schedule a free call with our expert."]
    },
    {
      question: "What are the government license required for food production?",
      answers: ["There are various licenses and government regulation for setting up food factory FSSAI, Pollution Control Board, Legal Meterology are few of them to know more"]
    },
    {
      question: "How can I select Best Packaging for my product?",
      answers: ["We have packaging and branding team who will help you to design right packaging for your product. We also help you to verify your label as per FSSAI requirements. Reach to us."]
    },
    {
      question: "How can I formulate my product?",
      answers: ["We have dedicated product development team which will help you to formulate product of your choice by selecting right ingredients to book a virtual meeting with our NPD team."]
    },
    {
      question: "My food business is not profitable what should I do?",
      answers: ["With our 15+ years of experience we help you to understand various aspects of food industry. We will audit your business and make some recommendation which may help you to make your business profitable to book an appointment with our expert."]
    },
    {
      question: "How Can I check Feasibility of my Idea?",
      answers: ["We can prepare and present a detailed feasibility study report of your shortlisted product before investing in business which will give you clear roadmap to go ahead."]
    },
    {
      question: "How to reduce cost in food business?",
      answers: ["There are various means where we can save. Cost of raw material, Cost of Utilities, Labour Cost, Sales and Marketing Cost. Lets undertsand where you are losing your money. We will help you by auditing your processes and systems to save your cost to know more"]
    },
    {
      question: "We are not able to scale-up ?",
      answers: ["To scale up systems and processing needs to be standardized in todays scenario there are various softwares like ERP, CRM, Real Time Tracking are available to standarize systems and process. Our tech team can help you to chose right solution for scaling up your business."]
    },

  ];



  constructor(private router: Router, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('');
    this.meta.addTag({ name: 'keywords' , content: 'Beverage consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Dairy consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Frozen Food Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Organic Food Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Ready to Eat Product consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Ready to Drink Beverage consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Meat & Poultry consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Nuts & Spices Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Bakery Consultant'})
  }

  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToFoodCategory(category: string): void {
    this.router.navigate(['/food-categories', category]);
    this.scrollToTop();
  }
  ngOnInit():void {
    AOS.init(
      {
        offset: 120,
        duration: 500,
      }
    );
  }

  getDelay(index: number): string {
    const delays = ['.1s', '.3s', '.5s', '.9s', '.10s', '.1s'];
    return delays[index] || '.1s';
  }
  toggleAccordion(index: number):void {
    if (this.activeIndex === index) {
      this.activeIndex = -1; 
    } else {
      this.activeIndex = index; 
    }
  }
  
  getServiceRoute(caption: string): string {
    return caption.toLowerCase().replace(/\s+/g, '-');
  }
}

