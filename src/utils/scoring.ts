import { Answer, AssessmentResults } from '@/types/assessment';

export const calculateResults = (answers: Answer[]): AssessmentResults => {
  // Helper function to get answer value as number
  const getNumericValue = (answer: Answer): number => {
    if (typeof answer.value === 'number') return answer.value;
    if (answer.value === 'yes') return 5;
    if (answer.value === 'no') return 1;
    // For multiple choice, assign scores based on correctness
    return getMultipleChoiceScore(answer.questionId, answer.value as string);
  };

  // Score multiple choice questions based on correct answers
  const getMultipleChoiceScore = (questionId: string, answer: string): number => {
    const correctAnswers: { [key: string]: string } = {
      't1': 'Ability to process large datasets across multiple machines',
      't2': 'Volume, Velocity, and Variety',
      't3': 'Hadoop Distributed File System',
      't4': 'Fast, large-scale data processing',
      't5': 'Python and Java'
    };
    
    return correctAnswers[questionId] === answer ? 5 : 2;
  };

  // Calculate psychometric score (questions p1-p5)
  const psychometricAnswers = answers.filter(a => a.questionId.startsWith('p'));
  const psychometricScore = Math.round(
    (psychometricAnswers.reduce((sum, answer) => sum + getNumericValue(answer), 0) / (psychometricAnswers.length * 5)) * 100
  );

  // Calculate technical score (questions t1-t5)
  const technicalAnswers = answers.filter(a => a.questionId.startsWith('t'));
  const technicalScore = Math.round(
    (technicalAnswers.reduce((sum, answer) => sum + getNumericValue(answer), 0) / (technicalAnswers.length * 5)) * 100
  );

  // Calculate WISCAR scores (questions w1-w6)
  const wiscarAnswers = answers.filter(a => a.questionId.startsWith('w'));
  const wiscarScores = {
    will: Math.round((getNumericValue(wiscarAnswers[0] || { questionId: 'w1', value: 3 }) / 5) * 100),
    interest: Math.round((getNumericValue(wiscarAnswers[1] || { questionId: 'w2', value: 3 }) / 5) * 100),
    skill: Math.round((getNumericValue(wiscarAnswers[2] || { questionId: 'w3', value: 3 }) / 5) * 100),
    cognitive: Math.round((getNumericValue(wiscarAnswers[3] || { questionId: 'w4', value: 3 }) / 5) * 100),
    abilityToLearn: Math.round((getNumericValue(wiscarAnswers[4] || { questionId: 'w5', value: 3 }) / 5) * 100),
    realWorldAlignment: Math.round((getNumericValue(wiscarAnswers[5] || { questionId: 'w6', value: 3 }) / 5) * 100)
  };

  // Calculate overall confidence score
  const confidenceScore = Math.round((psychometricScore + technicalScore + 
    Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6) / 3);

  // Determine recommendation
  let recommendation: 'Yes' | 'Maybe' | 'No' = 'No';
  if (confidenceScore >= 75) recommendation = 'Yes';
  else if (confidenceScore >= 55) recommendation = 'Maybe';

  // Generate next steps based on scores
  const nextSteps: string[] = [];
  if (technicalScore < 60) {
    nextSteps.push('Strengthen foundations in SQL, Python, and basic programming concepts');
  }
  if (wiscarScores.skill < 70) {
    nextSteps.push('Take introductory courses in Hadoop and Spark fundamentals');
  }
  if (psychometricScore >= 70) {
    nextSteps.push('Explore real-world Big Data projects and case studies');
  }
  if (recommendation === 'Yes') {
    nextSteps.push('Begin with hands-on projects using Hadoop and Spark');
    nextSteps.push('Join Big Data communities and attend workshops');
  }

  // Career alignment based on scores
  const careerAlignment: string[] = [];
  if (technicalScore >= 70) {
    careerAlignment.push('Big Data Engineer', 'Data Platform Engineer');
  }
  if (wiscarScores.cognitive >= 75) {
    careerAlignment.push('Data Architect', 'Streaming Data Engineer');
  }
  if (psychometricScore >= 80) {
    careerAlignment.push('Big Data Consultant', 'Cloud Data Specialist');
  }

  // Learning path
  const learningPath = ['SQL', 'Python', 'Linux Basics'];
  if (technicalScore >= 50) learningPath.push('Hadoop', 'Spark');
  if (technicalScore >= 70) learningPath.push('Kafka', 'Airflow', 'NoSQL');

  // Alternative roles
  const alternateRoles: string[] = [];
  if (recommendation !== 'Yes') {
    alternateRoles.push('Data Analyst', 'Business Intelligence Developer');
    if (technicalScore >= 40) alternateRoles.push('Database Administrator', 'Cloud Support Engineer');
  }

  return {
    psychometricScore,
    technicalScore,
    wiscarScores,
    confidenceScore,
    recommendation,
    nextSteps,
    careerAlignment,
    learningPath,
    alternateRoles
  };
};