import { Question } from '@/types/assessment';

export const questions: Question[] = [
  // Psychometric Questions
  {
    id: 'p1',
    text: 'I enjoy optimizing systems for better performance and efficiency.',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest'
  },
  {
    id: 'p2',
    text: 'I am curious about how distributed data processing works.',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest'
  },
  {
    id: 'p3',
    text: 'I prefer working on complex technical problems that require deep thinking.',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'personality'
  },
  {
    id: 'p4',
    text: 'I am motivated by learning new technologies and tools.',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'motivation'
  },
  {
    id: 'p5',
    text: 'I enjoy working with large datasets and finding patterns.',
    type: 'likert',
    category: 'psychometric',
    subcategory: 'interest'
  },
  
  // Technical Questions
  {
    id: 't1',
    text: 'What is the primary advantage of distributed computing systems?',
    type: 'multiple-choice',
    options: [
      'Lower cost',
      'Ability to process large datasets across multiple machines',
      'Easier to maintain',
      'Better security'
    ],
    category: 'technical'
  },
  {
    id: 't2',
    text: 'Which of these is a key characteristic of Big Data?',
    type: 'multiple-choice',
    options: [
      'Small volume, high velocity',
      'Volume, Velocity, and Variety',
      'Only structured data',
      'Single machine processing'
    ],
    category: 'technical'
  },
  {
    id: 't3',
    text: 'What does HDFS stand for?',
    type: 'multiple-choice',
    options: [
      'High Definition File System',
      'Hadoop Distributed File System',
      'Hierarchical Data File System',
      'Hybrid Database File System'
    ],
    category: 'technical'
  },
  {
    id: 't4',
    text: 'Apache Spark is primarily used for:',
    type: 'multiple-choice',
    options: [
      'Web development',
      'Fast, large-scale data processing',
      'Mobile app development',
      'Network security'
    ],
    category: 'technical'
  },
  {
    id: 't5',
    text: 'Which programming language is most commonly used in Big Data processing?',
    type: 'multiple-choice',
    options: [
      'JavaScript',
      'Python and Java',
      'C++',
      'PHP'
    ],
    category: 'technical'
  },

  // WISCAR Framework Questions
  {
    id: 'w1',
    text: 'I am willing to spend significant time learning complex Big Data tools.',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'will'
  },
  {
    id: 'w2',
    text: 'I find data architecture and pipeline design fascinating.',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'interest'
  },
  {
    id: 'w3',
    text: 'I have experience with SQL and database concepts.',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'skill'
  },
  {
    id: 'w4',
    text: 'I can break down complex problems into smaller, manageable parts.',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'cognitive'
  },
  {
    id: 'w5',
    text: 'I actively seek feedback and continuously improve my skills.',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'abilityToLearn'
  },
  {
    id: 'w6',
    text: 'I understand that Big Data roles involve working with massive datasets and distributed systems.',
    type: 'likert',
    category: 'wiscar',
    subcategory: 'realWorldAlignment'
  }
];