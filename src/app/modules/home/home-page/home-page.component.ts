import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // proJect = 'อะไรก้อได้';
  // nameTh1 = 'กอล์ฟ';
  // nameTh2 = 'ปอ';
  dataCard: any;
  constructor() { }

  ngOnInit(): void {
    this.getDataCard();
  }

  private getDataCard() {
    const data = [
      
    ];
    this.dataCard = data;
  }
}
