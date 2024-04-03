import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service5',
  templateUrl: './service5.component.html',
  styleUrls: ['./service5.component.scss']
})
export class Service5Component implements OnInit {
  selectedItem: string = '';

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedItem = params['itemName'];
    });
  }
  navigateTo(relativePath: string): void {
    this.router.navigate([relativePath], { skipLocationChange: true });
  }
}
