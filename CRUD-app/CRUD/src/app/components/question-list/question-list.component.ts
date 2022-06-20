import { Component, Input, OnInit } from '@angular/core';
import { QUESTIONS } from '../../mock-data/mock-questions';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions = QUESTIONS;
  selectedQuestion?: Question;
  @Input() in_question_categorie_name: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSelect(question: Question) {
    this.selectedQuestion = question;
  }
}
