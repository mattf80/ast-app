import { VersionsService } from './versions.service';
import { RouterModule } from '@angular/router';
import { VersionsRoutingModule } from './versions-routing.modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionsComponent } from './versions.component';
import { VersionListComponent } from './version-list/version-list.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { VersionFormComponent } from './version-form/version-form.component';



@NgModule({
  imports: [
    CommonModule,
    VersionsRoutingModule
  ],
  declarations: [VersionsComponent, VersionListComponent, VersionDetailComponent, VersionFormComponent],
  providers: [VersionsService]
})
export class VersionsModule { }
