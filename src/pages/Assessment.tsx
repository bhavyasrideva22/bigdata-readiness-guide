import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AssessmentIntro } from '@/components/AssessmentIntro';
import { QuestionCard } from '@/components/QuestionCard';
import { AssessmentProgress } from '@/components/AssessmentProgress';
import { ResultsDashboard } from '@/components/ResultsDashboard';
import { questions } from '@/data/questions';
import { Answer, AssessmentState, AssessmentResults } from '@/types/assessment';
import { calculateResults } from '@/utils/scoring';

const Assessment = () => {
  const [state, setState] = useState<AssessmentState>({
    currentStep: 0,
    answers: [],
    results: undefined
  });

  const [showIntro, setShowIntro] = useState(true);

  const currentQuestion = questions[state.currentStep];
  const currentAnswer = state.answers.find(a => a.questionId === currentQuestion?.id);

  const getSectionInfo = () => {
    if (state.currentStep < 5) return { name: 'Psychometric Assessment', total: 5 };
    if (state.currentStep < 10) return { name: 'Technical Knowledge', total: 5 };
    return { name: 'WISCAR Framework', total: 6 };
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  const handleAnswer = (value: number | string) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      value
    };

    setState(prev => ({
      ...prev,
      answers: [
        ...prev.answers.filter(a => a.questionId !== currentQuestion.id),
        newAnswer
      ]
    }));
  };

  const handleNext = () => {
    if (state.currentStep < questions.length - 1) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
    } else {
      // Calculate results
      const results = calculateResults(state.answers);
      setState(prev => ({
        ...prev,
        results
      }));
    }
  };

  const handlePrevious = () => {
    if (state.currentStep > 0) {
      setState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentStep: 0,
      answers: [],
      results: undefined
    });
    setShowIntro(true);
  };

  if (showIntro) {
    return <AssessmentIntro onStart={handleStart} />;
  }

  if (state.results) {
    return <ResultsDashboard results={state.results} onRestart={handleRestart} />;
  }

  const sectionInfo = getSectionInfo();
  const sectionStep = state.currentStep - (questions.length - sectionInfo.total);
  const adjustedStep = sectionStep >= 0 ? sectionStep + 1 : 
    (state.currentStep < 5 ? state.currentStep + 1 : state.currentStep - 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center pt-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Big Data Assessment
          </h1>
          <p className="text-muted-foreground mt-2">
            Take your time and answer honestly for the most accurate results.
          </p>
        </div>

        {/* Progress */}
        <AssessmentProgress 
          currentStep={adjustedStep}
          totalSteps={sectionInfo.total}
          sectionName={sectionInfo.name}
        />

        {/* Question */}
        <QuestionCard 
          question={currentQuestion}
          onAnswer={handleAnswer}
          currentAnswer={currentAnswer?.value}
        />

        {/* Navigation */}
        <Card className="p-6 shadow-soft border-0 bg-card">
          <div className="flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={state.currentStep === 0}
            >
              Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              Question {state.currentStep + 1} of {questions.length}
            </span>

            <Button 
              onClick={handleNext}
              disabled={!currentAnswer}
              className="bg-gradient-to-r from-primary to-accent"
            >
              {state.currentStep === questions.length - 1 ? 'See Results' : 'Next'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;