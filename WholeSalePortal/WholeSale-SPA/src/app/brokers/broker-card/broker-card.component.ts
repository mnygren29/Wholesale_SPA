import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-broker-card',
  templateUrl: './broker-card.component.html',
  styleUrls: ['./broker-card.component.css']
})
export class BrokerCardComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
