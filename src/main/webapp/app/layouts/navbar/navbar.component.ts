import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuoteModalService } from './quote-Model.service';

@Component({
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  showServicesGrid = false;
  showThankYouMessage = false;
  isServicesDropdownOpen = false;
  isDropdownOpen = false;
  isSaving = false;
  editForm = new FormGroup({
    name: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(50)],
    }),
    contactNumber: new FormControl(null, {
      validators: [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ],
    }),
    email: new FormControl(null, {
      validators: [Validators.required, Validators.email],
    }),
    requirements: new FormControl(null, {
      validators: [Validators.required, Validators.maxLength(100)],
    }),
  });

  constructor(
    public router: Router,
    private quoteModalService: QuoteModalService
  ) {}

  toggleServicesGrid():void {
    this.showServicesGrid = !this.showServicesGrid;
  }

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu():void {
    this.isMenuOpen = false;
    this.isServicesDropdownOpen = false;
  }

  toggleServicesDropdown():void {
    this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
  }

  toggleDropdown():void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  scrollToTop():void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  save():void {
    this.isSaving = true;
    const formDetails = this.editForm.getRawValue();
    this.quoteModalService.modelQuote(formDetails).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  private onSaveSuccess(): void {
    this.editForm.reset();
    this.showThankYouMessage = true;
    setTimeout(() => {
      this.showThankYouMessage = false;
    }, 5000);
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
