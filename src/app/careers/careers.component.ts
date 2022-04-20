import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  longText = `KPT has a vibrant work culture which fosters open communication, diversity, innovation & employee delight. We hire people who are passionate about technology and have conviction in their ideas. We strive for innovation that could rival any start up matched by a commitment to living our values that is second to none. Whether a KPTian is just starting career or interested in doing R&D, they have flexibility and peace of mind to connect simultaneously to their passion and dreams. KPTians have regular “coffee and communication” or “lunch and learn” sessions, where socializing is as important as the business topic.`;

}
