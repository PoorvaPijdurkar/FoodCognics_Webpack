import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.scss']
})
export class Service3Component {
  constructor(private route: ActivatedRoute,private router: Router) {}
  
  navigateTo(relativePath: string): void {
    this.router.navigate([relativePath], { skipLocationChange: true });
  }
}
