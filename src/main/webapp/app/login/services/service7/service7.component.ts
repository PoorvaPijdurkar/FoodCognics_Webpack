import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service7',
  templateUrl: './service7.component.html',
  styleUrls: ['./service7.component.scss']
})
export class Service7Component {
  constructor(private route: ActivatedRoute,private router: Router) {}

  navigateTo(relativePath: string): void {
    this.router.navigate([relativePath], { skipLocationChange: true });
  }
}
