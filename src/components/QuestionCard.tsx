import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Question } from '@/types/assessment';

interface QuestionCardProps {
  question: Question;
  onAnswer: (value: number | string) => void;
  currentAnswer?: number | string;
}

export const QuestionCard = ({ question, onAnswer, currentAnswer }: QuestionCardProps) => {
  const renderLikertScale = () => {
    const labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
    
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-2">
          {labels.map((label, index) => (
            <Button
              key={index}
              variant={currentAnswer === index + 1 ? "default" : "outline"}
              className="h-auto py-3 px-2 text-xs"
              onClick={() => onAnswer(index + 1)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground px-1">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    return (
      <div className="space-y-3">
        {question.options?.map((option, index) => (
          <Button
            key={index}
            variant={currentAnswer === option ? "default" : "outline"}
            className="w-full justify-start h-auto py-4 px-4 text-left"
            onClick={() => onAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    );
  };

  const renderYesNo = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={currentAnswer === 'yes' ? "default" : "outline"}
          className="h-12"
          onClick={() => onAnswer('yes')}
        >
          Yes
        </Button>
        <Button
          variant={currentAnswer === 'no' ? "default" : "outline"}
          className="h-12"
          onClick={() => onAnswer('no')}
        >
          No
        </Button>
      </div>
    );
  };

  return (
    <Card className="p-8 shadow-medium border-0 bg-gradient-secondary">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold leading-relaxed text-foreground">
          {question.text}
        </h3>
        
        <div className="pt-4">
          {question.type === 'likert' && renderLikertScale()}
          {question.type === 'multiple-choice' && renderMultipleChoice()}
          {question.type === 'yes-no' && renderYesNo()}
        </div>
      </div>
    </Card>
  );
};