import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PolicyService} from '../../services/policy.service';
import {ActivatedRoute} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  closeResult = '';

  constructor(private service: PolicyService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

  public onSubmit(policy: NgForm): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.createPolicy(id, policy.value.type, policy.value.subtype,
      policy.value.number, policy.value.period, policy.value.startDate, policy.value.endDate, policy.value.fee);

    alert('stop');
    location.reload();
    this.modalService.dismissAll();
  }

  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${CreatePolicyComponent.getDismissReason(reason)}`;
    });
  }
}
