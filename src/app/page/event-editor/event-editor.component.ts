import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { Observable, switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

event: Event = new Event();

  constructor(
   private ar: ActivatedRoute,
   private eService: EventService
  ) {}
   
   
    ngOnInit(): void {
     this.ar.params.subscribe(
        params =>
          this.eService.get(params['id']).subscribe(
            event => {
              console.log(event);
              this.event = event || new Event();
            }
          )
      );
  }

  onUpdate(eventForm: NgForm): void {
    console.log(eventForm.value);
    this.eService.update(eventForm.value).subscribe(
      event => console.log(event) 
    )
  }

}
