import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'jhi-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(private router: Router, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('');
    this.meta.addTag({ name: 'keywords', content: 'Food Beverage Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'Food Product Development Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'Food Processing Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'Auditing Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'New product Development Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'Cold Storage Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'Leading Food Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'Food Safety Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'FMCG Consultant' });
    this.meta.addTag({ name: 'keywords', content: 'MoFPI subsidy Consultants' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
