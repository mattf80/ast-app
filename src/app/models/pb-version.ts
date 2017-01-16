import { Exam, ExamComponent } from './exam';

export class PbVersion {
  id: number;
  exam: Exam;
  examComponent: ExamComponent;
  name: string;
  isCurrent: boolean;
  dateAdded: string;
  dateRetired?: string;
  
}