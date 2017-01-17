import { Exam, ExamComponent } from './../models/exam';
import { PbVersion } from './../models/pb-version';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class VersionsService {

  private versionsUrl: string = 'app/versions';
  private examsUrl: string = 'app/exams';
  private examComponentUrl: string = 'app/examComponents';


  private serverUrl: string = 'http://localhost:52277/api/';

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getVersions(): Observable<PbVersion[]> {
    return this.http.get(this.versionsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getVersion(id: number): Observable<PbVersion> {
    const url = `${this.versionsUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getExams(): Observable<Exam[]> {
    return this.http.get(this.serverUrl + 'exams')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getComponentsForExam(examId: number): Observable<ExamComponent[]> {
    const url = `${this.serverUrl}exams/${examId}/examcomponents`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getReferenceData() {
    return Observable.forkJoin(
      this.http.get(this.examsUrl).map(response => response.json().data as Exam[]),
      this.http.get(this.examComponentUrl).map(response => response.json().data as ExamComponent[])
    );
  }

  addVersion(version: PbVersion): Observable<PbVersion> {
    return this.http.post(this.versionsUrl, JSON.stringify({ version }), { headers: this.headers })
      .map(res => res.json().data.version as PbVersion)
      .catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
