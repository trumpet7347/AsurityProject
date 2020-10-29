import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  columnsToDisplay = ['firstName','lastName','email','street','city','state','zip','phoneNumber','contactFrequency','contactMethod'];

  contacts: Contact[];

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(): void {
    this.ContactService.getContacts().subscribe((data: Contact[]) => this.contacts = data);
  }

  onRowClick(row): void {
    let test = row;
  }


}
