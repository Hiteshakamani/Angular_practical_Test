interface Question {
    id: number;
    title: string;
    description: string;
    tags: string[];
    userId: number;
    answers: Answer[];
    views: number;
  }
  
  interface Answer {
    id: number;
    text: string;
    userId: number;
    votes: number;
    accepted: boolean;
  }