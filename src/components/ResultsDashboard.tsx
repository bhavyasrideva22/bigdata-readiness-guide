import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AssessmentResults } from '@/types/assessment';

interface ResultsDashboardProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export const ResultsDashboard = ({ results, onRestart }: ResultsDashboardProps) => {
  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'Yes': return 'text-success';
      case 'Maybe': return 'text-warning';
      case 'No': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'Yes': return '✅';
      case 'Maybe': return '⚠️';
      case 'No': return '❌';
      default: return '❓';
    }
  };

  const ScoreCard = ({ title, score, description }: { title: string; score: number; description: string }) => (
    <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
      <div className="space-y-3">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
            <span className="text-xl font-bold text-white">{score}</span>
          </div>
          <div className="flex-1">
            <div className="w-full bg-muted h-2 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Assessment Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Here's your personalized evaluation for a Big Data career
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className="p-8 shadow-medium border-0 bg-card text-center">
          <div className="space-y-4">
            <div className="text-6xl">
              {getRecommendationIcon(results.recommendation)}
            </div>
            <h2 className="text-3xl font-bold">
              <span className={getRecommendationColor(results.recommendation)}>
                {results.recommendation}
              </span>
              {results.recommendation === 'Yes' && ', you should learn Big Data!'}
              {results.recommendation === 'Maybe' && ', consider exploring Big Data further'}
              {results.recommendation === 'No' && ', Big Data might not be the best fit'}
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-muted-foreground">Confidence Level:</span>
              <span className="text-2xl font-bold text-primary">{results.confidenceScore}%</span>
            </div>
          </div>
        </Card>

        {/* Score Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScoreCard 
            title="Psychological Fit"
            score={results.psychometricScore}
            description="Your personality and interests align with Big Data roles"
          />
          <ScoreCard 
            title="Technical Readiness"
            score={results.technicalScore}
            description="Your current technical knowledge and aptitude"
          />
        </div>

        {/* WISCAR Framework */}
        <Card className="p-8 shadow-medium border-0 bg-card">
          <h3 className="text-2xl font-semibold mb-6">WISCAR Framework Analysis</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(results.wiscarScores).map(([key, score]) => (
              <div key={key} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="font-bold text-primary">{score}%</span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Next Steps */}
          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <h3 className="text-xl font-semibold mb-4 text-primary">🚀 Next Steps</h3>
            <ul className="space-y-2">
              {results.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-accent font-semibold">•</span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Career Alignment */}
          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <h3 className="text-xl font-semibold mb-4 text-accent">💼 Career Alignment</h3>
            <ul className="space-y-2">
              {results.careerAlignment.map((career, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-primary font-semibold">•</span>
                  <span className="text-sm">{career}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Learning Path */}
          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <h3 className="text-xl font-semibold mb-4 text-success">📚 Learning Path</h3>
            <div className="flex flex-wrap gap-2">
              {results.learningPath.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-success/20 text-success rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Alternative Roles */}
          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <h3 className="text-xl font-semibold mb-4 text-warning">🔄 Alternative Roles</h3>
            <ul className="space-y-2">
              {results.alternateRoles.map((role, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-warning font-semibold">•</span>
                  <span className="text-sm">{role}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button 
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="px-8 py-4"
          >
            Take Assessment Again
          </Button>
        </div>
      </div>
    </div>
  );
};