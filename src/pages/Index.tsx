import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-3xl">🌐</span>
            <span className="font-semibold text-primary">Pathfinder Assessment Series</span>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Discover Your Perfect
            <br />
            Tech Career Path
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Take our comprehensive assessments to discover which technology specialization aligns with your skills, interests, and career goals.
          </p>
        </div>

        {/* Featured Assessment */}
        <Card className="p-8 shadow-medium border-0 bg-gradient-secondary max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-4xl">🧠</span>
              <h2 className="text-2xl font-bold">Big Data Specialist Assessment</h2>
            </div>
            
            <p className="text-muted-foreground">
              Evaluate your readiness for a career in Big Data engineering, including psychological fit, technical knowledge, and learning potential.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">25-30</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">16</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            <Button 
              onClick={() => navigate('/assessment')}
              size="lg"
              className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-medium transition-all duration-300"
            >
              Start Assessment
              <span className="ml-2">→</span>
            </Button>
          </div>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-soft border-0 bg-card">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold">Personalized Results</h3>
              <p className="text-sm text-muted-foreground">
                Get detailed insights about your strengths, growth areas, and career recommendations.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-soft border-0 bg-card">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold">Comprehensive Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Multi-dimensional evaluation covering psychology, skills, and technical readiness.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-soft border-0 bg-card">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold">Actionable Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Receive specific learning paths and next steps to advance your career.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
