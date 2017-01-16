import { IssuanceHomeComponent } from './issuance-home/issuance-home.component';
import { IssuanceFormComponent } from './issuance-form/issuance-form.component';
import { IssuanceListComponent } from './issuance-list/issuance-list.component';
import { IssuanceComponent } from './issuance.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const ISSUANCE_ROUTES: Routes = [
    {
        path: 'issuances',
        component: IssuanceComponent,
        children: [
            {
                path: '',
                component: IssuanceHomeComponent
            },
            {
                path: 'list',
                component: IssuanceListComponent
            },
            {
                path: 'new',
                component: IssuanceFormComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ISSUANCE_ROUTES)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class IssuanceRoutingModule { }
