import { Exam } from './../models/exam';
import { PbVersion } from './../models/pb-version';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemDataService implements InMemoryDbService {
  createDb() {
    let versions = [
      { id: '1',  exam: { id: 1, name: 'KET' }, examComponent: { id: '1', name: 'Reading' }, name: 'Version A', isCurrent: true } ,
      { id: '2',  exam: { id: 1, name: 'KET' }, examComponent: { id: '2', name: 'Writing' }, name: 'Version B', isCurrent: true },
      { id: '3',  exam: { id: 3, name: 'FCE' }, examComponent: { id: '4', name: 'Listening' }, name: 'Version E', isCurrent: false  },
      { id: '4',  exam: { id: 4, name: 'CAE' }, examComponent: { id: '5', name: 'Use of English' }, name: 'Version 36DD', isCurrent: true }
    ];
    let exams = [
      { id: '1', name: 'KET' },
      { id: '2', name: 'PET' },
      { id: '3', name: 'FCE' },
      { id: '4', name: 'CAE' },
      { id: '5', name: 'CPE' }
    ];
    let examComponents = [
      { id: '1', name: 'Reading' },
      { id: '2', name: 'Writing' },
      { id: '3', name: 'Speaking' },
      { id: '4', name: 'Listening' },
      { id: '5', name: 'Use of English' }
    ];
    return { versions, exams, examComponents };
  }
} 