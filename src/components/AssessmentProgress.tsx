interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
  sectionName: string;
}

export const AssessmentProgress = ({ currentStep, totalSteps, sectionName }: AssessmentProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-muted-foreground">
          {sectionName}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};