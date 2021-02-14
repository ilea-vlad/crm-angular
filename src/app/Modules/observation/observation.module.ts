import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ObservationRoutingModule} from './observation-routing.module';
import {CreateObservationComponent} from './components/create-observation/create-observation.component';
import {GetObservationsComponent} from './components/get-observations/get-observations.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateObservationComponent, GetObservationsComponent],
  imports: [
    CommonModule,
    ObservationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [GetObservationsComponent]
})
export class ObservationModule {
}
