import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service4',
  templateUrl: './service4.component.html',
  styleUrls: ['./service4.component.scss']
})
export class Service4Component implements OnInit {
  selectedItem: string = '';  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.selectedItem = params['itemName'];
    });
  }
}