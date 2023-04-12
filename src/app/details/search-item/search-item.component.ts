import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from 'src/app/Shared/question.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  searchQuery!: string;
  // searchResults: any[] = [];
  @Input() result: any;
  question: any;

  constructor(
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  searchResults() {
    const url = `http://localhost:3000/questions?title_like=${this.searchQuery}`;
    this.http.get(url).subscribe((data: any) => {
      this.searchResults = data;
    });
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
      if (this.searchQuery) {
        this.searchResults();
      }
    });
    this.questionService.getQuestion(this.result.id).subscribe((question) => {
      this.question = question;
    });
  }

  
}

