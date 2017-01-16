import { PbVersion } from './../../models/pb-version';
import { VersionsService } from './../../versions/versions.service';
import { Issuance } from './../../models/issuance';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-issuance-form',
  templateUrl: './issuance-form.component.html',
  styleUrls: ['./issuance-form.component.css']
})
export class IssuanceFormComponent implements OnInit {

  issuanceForm: FormGroup;
  issuance: Issuance = new Issuance();
  pbVersions: PbVersion[];

  constructor(
    private fb: FormBuilder,
    private service: VersionsService) { }

  ngOnInit() {
    this.getVersions();
    
    this.issuanceForm = this.fb.group({
      centreNo: ['', Validators.required],
      pbVersion: [{}],
      dateIssued: [new Date().toLocaleDateString]
    })
  }

  getVersions(){
    this.service.getVersions()
      .subscribe(data => {
        this.pbVersions = data;
        console.log(this.pbVersions);
      });
  }

  save(){
    console.log(this.issuanceForm);
    console.log("Saving...." + JSON.stringify(this.issuanceForm.value));
  }

}
