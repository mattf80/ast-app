import { ReactiveFormsModule } from '@angular/forms';
import { IssuanceService } from './issuance.service';
import { IssuanceRoutingModule } from './issuance-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuanceComponent } from './issuance.component';
import { IssuanceListComponent } from './issuance-list/issuance-list.component';
import { IssuanceFormComponent } from './issuance-form/issuance-form.component';
import { IssuanceHomeComponent } from './issuance-home/issuance-home.component';


@NgModule({
  imports: [
    CommonModule,
    IssuanceRoutingModule,
    ReactiveFormsModule    
  ],
  declarations: [IssuanceComponent, IssuanceListComponent, IssuanceFormComponent, IssuanceHomeComponent],
  providers: [IssuanceService]
})
export class IssuanceModule { }
