export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'yes-no';
  options?: string[];
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory?: string;
}

export interface Answer {
  questionId: string;
  value: number | string;
}

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    abilityToLearn: number;
    realWorldAlignment: number;
  };
  confidenceScore: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
  nextSteps: string[];
  careerAlignment: string[];
  learningPath: string[];
  alternateRoles: string[];
}

export interface AssessmentState {
  currentStep: number;
  answers: Answer[];
  results?: AssessmentResults;
}