import { Exam, ExamComponent } from './../../models/exam';
import { VersionsService } from './../versions.service';
import { PbVersion } from './../../models/pb-version';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-version-form',
  templateUrl: './version-form.component.html',
  styleUrls: ['./version-form.component.css']
})
export class VersionFormComponent implements OnInit {

  public versionForm: FormGroup;
  public exams: Exam[];
  public examComponents: ExamComponent[];

  constructor(
    private fb: FormBuilder,
    private service: VersionsService) { }

  ngOnInit() {
    this.initForm();
    //this.getExamsAndComponents();
    this.getExams();
  }

  getExams() {
    this.service.getExams()
      .subscribe(data => {
        this.exams = data;
      })
  }

  onExamChange(){
    let examId = this.versionForm.get('exam').value['id'];
    this.service.getComponentsForExam(examId)
      .subscribe(data => {
        this.examComponents = data;
        console.log(this.examComponents);
      }) 
  }

  getExamsAndComponents() {
    this.service.getReferenceData()
      .subscribe(data => {
        this.exams = data[0];
        this.examComponents = data[1];
      });
  }

  initForm() {
    this.versionForm = this.fb.group({
      exam: ['', Validators.required],
      examComponent: ['', Validators.required],
      name: ['', Validators.required],
      isCurrent: [true]
    });
  }

  save(model: PbVersion) {
    model.dateAdded = new Date().toUTCString();
    this.service.addVersion(model)
      .subscribe(data => {
        console.log(data);
      })
  }

}
