import { VersionFormComponent } from './version-form/version-form.component';
import { VersionDetailComponent } from './version-detail/version-detail.component';
import { VersionListComponent } from './version-list/version-list.component';
import { VersionsComponent } from './versions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const VERSIONS_ROUTES: Routes = [
  {
    path: 'versions',
    component: VersionsComponent,
    children: [
      {
        path: 'list',
        component: VersionListComponent
      },
      {
        path: 'new',
        component: VersionFormComponent
      },
      {
        path: ':id',
        component: VersionDetailComponent
      }

    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VERSIONS_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class VersionsRoutingModule { }
