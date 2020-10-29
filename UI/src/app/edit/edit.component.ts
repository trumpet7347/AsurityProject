import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactFrequency } from '../contact-frequency.model';
import { ContactMethod } from '../contact-method.model';
import { Contact } from '../contact.model';
import { State } from '../state.model';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;

  contact: Contact;
  states: State[];
  contactFreq: ContactFrequency[];
  contactMethod: ContactMethod[];

  constructor(private route: ActivatedRoute, private ContactService: ContactService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.id = params['id'];});

    this.ContactService.getContact(this.id).subscribe((data: Contact) => this.contact = data);
    this.ContactService.getStates().subscribe((data: State[]) => this.states = data);
    this.ContactService.getContactFreq().subscribe((data: ContactFrequency[]) => this.contactFreq = data);
    this.ContactService.getContactMethod().subscribe((data: ContactMethod[]) => this.contactMethod = data);
  }

}
