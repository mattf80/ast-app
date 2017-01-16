import { PbVersion } from './../../models/pb-version';
import { VersionsService } from './../../versions/versions.service';
import { Issuance } from './../../models/issuance';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

const EXAMS: any[] = [
    {id: 1, name: "FCE", examComponents: [{id:1, name: "Reading"}, {id: 2, name: "Smoking"}]},
    {id: 2, name: "CAE", examComponents: [{id:3, name: "Flying"}, {id: 4, name: "Fighting"}]}
  ]

@Component({
  selector: 'app-issuance-form',
  templateUrl: './issuance-form.component.html',
  styleUrls: ['./issuance-form.component.css']
})

export class IssuanceFormComponent implements OnInit {

  issuanceForm: FormGroup;
  issuance: Issuance = new Issuance();
  pbVersions: PbVersion[];
  exams: any[] = [];
  examComponents: any[] = [];


  constructor(
    private fb: FormBuilder,
    private service: VersionsService) { }

  ngOnInit() {
    this.getVersions();
    this.initForm();
    this.exams = EXAMS;
    console.log(this.exams);
  }

  getVersions(){
    this.service.getVersions()
      .subscribe(data => {
        this.pbVersions = data;
      });
  }

  onExamChange(){
   let selectedExam = this.issuanceForm.get('exam').value;
   this.examComponents = selectedExam.examComponents;
  }

  initForm(){
    this.issuanceForm = this.fb.group({
      centreNo: ['', [Validators.required, Validators.minLength(5)]],
      exam: [{}],
      examComponent: [{}],
      pbVersion: [{}],
      dateIssued: [new Date().toLocaleDateString]
    })
  }

  save(){
    console.log(this.issuanceForm);
    console.log("Saving...." + JSON.stringify(this.issuanceForm.value));
  }

}
