import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    let versions = [
      { id: '1', exam: 'FCE', examComponent: 'Writing', isCurrent: true },
      { id: '2', exam: 'CAE', examComponent: 'Speaking', isCurrent: true  },
      { id: '3', exam: 'CAE', examComponent: 'Reading & Listening', isCurrent: false  },
      { id: '4', exam: 'CPE', examComponent: 'Use of English', isCurrent: true  }
    ];
    return {versions};
  }
} 