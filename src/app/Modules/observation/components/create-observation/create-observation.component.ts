import {Component, Input, OnInit} from '@angular/core';
import {ObservationService} from '../../services/observation.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.css']
})
export class CreateObservationComponent implements OnInit {
  @Input() clientId: number;
  receivedObservation = new FormGroup({
    date: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private service: ObservationService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.service.createWithClient(this.clientId.toString(), this.receivedObservation.value);
  }

}
