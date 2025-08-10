import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AssessmentIntroProps {
  onStart: () => void;
}

export const AssessmentIntro = ({ onStart }: AssessmentIntroProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-2xl">🧠</span>
            <span className="text-sm font-medium text-primary">Pathfinder Assessment Series</span>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Should I Learn Big Data?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover whether you're ready to embark on a career as a Big Data Specialist with our comprehensive assessment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold">Psychological Fit</h3>
              <p className="text-sm text-muted-foreground">
                Evaluate your personality traits and cognitive style for Big Data roles.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold">Technical Readiness</h3>
              <p className="text-sm text-muted-foreground">
                Assess your current knowledge of distributed systems and Big Data tools.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-soft border-0 bg-gradient-secondary">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold">Personalized Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Get tailored recommendations and learning paths based on your results.
              </p>
            </div>
          </Card>
        </div>

        {/* Assessment Details */}
        <Card className="p-8 shadow-medium border-0 bg-card">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What You'll Discover</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-primary">🎯 Career Compatibility</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Psychological alignment with Big Data roles</li>
                  <li>• Interest in distributed systems and data processing</li>
                  <li>• Motivation for continuous learning</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-accent">⚡ Technical Assessment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Current knowledge of Big Data concepts</li>
                  <li>• Understanding of tools like Hadoop, Spark, Kafka</li>
                  <li>• Programming and database fundamentals</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Duration:</strong> 25-30 minutes • <strong>Questions:</strong> 16 assessments • <strong>Format:</strong> Interactive
              </p>
            </div>
          </div>
        </Card>

        {/* Start Button */}
        <div className="text-center">
          <Button 
            onClick={onStart}
            size="lg"
            className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-medium transition-all duration-300"
          >
            Start Assessment
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </div>
  );
};