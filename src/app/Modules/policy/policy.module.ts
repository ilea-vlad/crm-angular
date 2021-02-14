import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { GetClientPolicyComponent } from './components/get-client-policy/get-client-policy.component';
import { CreatePolicyComponent } from './components/create-policy/create-policy.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdatePolicyComponent } from './components/update-policy/update-policy.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [GetClientPolicyComponent, CreatePolicyComponent, UpdatePolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    GetClientPolicyComponent
  ]
})
export class PolicyModule { }
