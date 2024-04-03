import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-service6',
  templateUrl: './service6.component.html',
  styleUrls: ['./service6.component.scss']
})
export class Service6Component implements OnInit {
  selectedItem: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedItem = params['itemName'];
    });
  }
}
