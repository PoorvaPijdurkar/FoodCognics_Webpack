import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta , Title} from '@angular/platform-browser';

@Component({
  selector: 'jhi-about-knowmore',
  templateUrl: './about-knowmore.component.html',
  styleUrls: ['./about-knowmore.component.scss']
})
export class AboutKnowmoreComponent {
  showDetailsFlag = false;

  selectedDetails: any;
  imageItems = [
    {
      imagePath: '../../../content/images/assets/Home/sirImg.jpeg',
      description: `
      He is Managing Director of incessantly growing "Food Cognics lndia Pvt. Ltd. Pune“."Food Cognics lndia Pvt. Ltd. Pune“ is one of the leading food consultancy services in India. Experienced Food Industry Professional with over 15 years of expertise in conceiving, planning, and executing turnkey projects within the food sector. Skilled in as well as handset on project management, cost optimization, regulatory compliance, and delivering exceptional results. He had track record og managing as well as setting up of international turnkey projects,worked across diverse market. Pioneered the implementation of cutting edge food technology solutions with visionary approach of quality,safety and sustainability.He is aslo founder member of Daily Bite Pvt.Ltd.Key skills of leadrship,good team player and motivating personality with people management skill will continuosly adding value to the food processing industries as well as clients business.
      `,
      name: "Mr.Gajanan Kalyane",
      Designataion: "Director",
      education: 'B.Tech (Food Technology) & MBA (Finance)',
      linkedin: 'https://in.linkedin.com/in/gajanankalyane'
    },

    {
      imagePath: '../../../content/images/assets/about/bholesir.jpeg',
      description: `Experienced General Manager with a proven track record of success in overseeing and optimizing operations. With 8+ years in leadership roles, He've consistently delivered results by streamlining processes, improving team performance, and driving profitability. His expertise spans various industries, from hospitality to manufacturing, and he expertise in  strategic thinking, team leadership, and exceptional problem-solving skills.  Young and dynamic entrepreneur ,Pursuing career in Food Processing Industries mainly in to business development, Worked for New Territory Development for Food FMCG Products like Cocoa Based Chocolates, Frozen RTE, wafers and namkeens. Effective lead generation through social media and offline channels.`,
      name: "Mr.Rohan Bhole",
      Designataion: "General Manager",
      education: 'MBA (Sales & Marketing)',
      linkedin: 'https://www.linkedin.com/in/rohan-bhole-a5235510a'
    },

    {
      imagePath: '../../../content/images/assets/teams/teams.jpg',
      description: `She is has expertise in the field of food science and technology. She is hardworking individual who is always eager to learn new skills. With opportunity to work on diverse projects from product develpoment to regulatory complience. Hand on Research and  Development  alspo ISO, HACCP certified , she strive for perfection.Have good leadership qualities and good communication skills.`,
      name: "Durva Yadav",
      Designataion: "Regulatory Executive",
      education: 'M.Tech (Food Technology)',
      linkedin: 'https://www.linkedin.com/in/durva-yadav-0467001a7'
    },

    {
      imagePath: '../../../content/images/assets/about/dhnanjaysir.jpeg',
      description: ` Passionate and results-driven professional with a background in agriculture and a Master's in Business Administration specializing in Sales and Marketing. He bring a unique blend of agricultural expertise and strategic marketing skills to the table. With a deep understanding of the food industry and a track record of driving sales and brand growth.He keeps ability to bridge the gap between the farm and market, combined with innovative marketing strategies.`,
      name: "Dhananjay Gadekar",
      Designataion: "Project Coordinator",
      education: 'MBA(Agri.& Food Busniess Management)',
      linkedin: 'https://www.linkedin.com/in/dhananjay-gadekar-315b05221'
    },

    {
      imagePath: '../../../content/images/assets/about/dattasir.jpeg',
      description: `With a strong foundation rooted in agriculture from his home background, he bring a unique blend of practical experience and academic expertise to the table. He hold a B.Tech in Food Technology and have further honed his skills with an MBA in Food and Agri Business Management. His professional journey has equipped him with a deep understanding of marketing and sales strategies in the agri-food sector. He is dedicated to contributing valuable insights and driving success in the dynamic intersection of agriculture and business.`,
      name: "Datta Malewar",
      Designataion: "Business Development Excecutive",
      education: 'B.Tech( Food Technology) MBA (Agri & Food Business Management)',
      linkedin: 'https://www.linkedin.com/in/datta-malewar-733903171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },

  ];

  teamsData = [
    {
      title: 'Regulatory Expert',
      imageSrc: '../../../content/images/assets/Teams-Icons/Regulatory Experts FoodCognics.jpg',
      description: 'Strongly reliable and focused food regulatory affairs specialist...'
    },

    {
      title: 'Regulatory Expert',
      imageSrc: '../../../content/images/assets/Teams-Icons/Regulatory Experts FoodCognics.jpg',
      description: 'Strongly reliable and focused food regulatory affairs specialist...'
    },

    {
      title: 'Regulatory Expert',
      imageSrc: '../../../content/images/assets/Teams-Icons/Regulatory Experts FoodCognics.jpg',
      description: 'Strongly reliable and focused food regulatory affairs specialist...'
    },

    {
      title: 'Regulatory Expert',
      imageSrc: '../../../content/images/assets/Teams-Icons/Regulatory Experts FoodCognics.jpg',
      description: 'Strongly reliable and focused food regulatory affairs specialist...'
    },

  ];

  constructor(private router: Router, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('');
    this.meta.addTag({ name: 'keywords' , content: 'Confectionery Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Millet Food Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Ready to Cook Food Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Cereals & Pulses Food Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Nutraceutical Foods Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Packaging Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Labelling Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Regulatory Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Fruits processing Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Vegetable Processing Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Snacks manufacturing Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Extruded Products manufacturing Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Fats & oil Industry Consultant'})
    this.meta.addTag({ name: 'keywords' , content: 'Food Service Consultant'})
  }


  toggleDetails(item: any): void {
    if (this.showDetailsFlag && this.selectedDetails === item) {
      this.showDetailsFlag = false;
    } else {
      this.showDetailsFlag = true;
      this.selectedDetails = item;
    }
  }
}