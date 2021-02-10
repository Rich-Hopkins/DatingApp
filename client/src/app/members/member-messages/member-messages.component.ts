import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_modules/message';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() messages: Message[];
  @Input() username: string;

  constructor() { }

  ngOnInit(): void {
  }

}
