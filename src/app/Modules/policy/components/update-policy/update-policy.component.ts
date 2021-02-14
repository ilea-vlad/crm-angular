import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PolicyType} from '../../../../Types/PolicyType';
import {PolicyService} from '../../services/policy.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent implements OnInit {
  id: string;
  selectedPolicy: PolicyType;
  editForm: FormGroup;

  constructor(private service: PolicyService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public modal: NgbActiveModal) {
  }

  ngOnInit(): void {

    this.populateForm();
  }


  public onSubmit(): void {
    this.service.updatePolicy(this.selectedPolicy.client.id.toString(), this.editForm.value);
    this.modal.close();
  }

  private populateForm(): void {
    this.editForm = this.formBuilder.group({
      id: [this.selectedPolicy.id],
      types: [this.selectedPolicy.types],
      subtype: [this.selectedPolicy.subtype],
      number: [this.selectedPolicy.number],
      period: [this.selectedPolicy.period],
      startDate: [this.selectedPolicy.startDate],
      endDate: [this.selectedPolicy.endDate],
      fee: [this.selectedPolicy.fee]
    });
  }

}
