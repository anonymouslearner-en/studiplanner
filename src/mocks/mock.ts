/**
 * Mock exam data based on TH Köln BaTIN Winter 2024 exam schedule
 */
import type { Exam, Topic, tPrepStatus, tState } from "./../types/exam";

// Helper function to create topics for different subjects
const createTopics = (
  topicNames: string[],
  relevanceDistribution?: string[]
): Topic[] => {
  const relevanceOptions: Topic["relevance"][] = [
    "explicitly not coming",
    "could appear",
    "focus",
  ];
  const difficultyOptions: Topic["difficultyLevel"][] = [
    "Easy",
    "Moderate",
    "Difficult",
    "Endgame",
  ];
  const prepStatusOptions: tPrepStatus[] = [
    "Not Started",
    "In Progress",
    "Well Prepared",
    "Ready",
  ];

  return topicNames.map((name, index) => ({
    name,
    id: `topic_${name.toLowerCase().replace(/\s+/g, "_")}_${index}`,
    prepStatus:
      prepStatusOptions[Math.floor(Math.random() * prepStatusOptions.length)],
    difficultyLevel:
      difficultyOptions[Math.floor(Math.random() * difficultyOptions.length)],
    relevance: relevanceDistribution
      ? (relevanceDistribution[index] as Topic["relevance"]) || "could appear"
      : relevanceOptions[Math.floor(Math.random() * relevanceOptions.length)],
  }));
};

export const mockExams: Exam[] = [
  {
    name: "Algorithmen und Datenstrukturen",
    id: "AD_1338",
    state: "Scheduled",
    prepStatus: "In Progress",
    details: {
      scheduledDate: new Date("2025-02-06T11:30:00"),
      scheduledPlace: "H1",
      duration: 120,
      notes: "Präsenzprüfung, schriftlich - Prof. Shafieian",
    },
    topics: createTopics(
      [
        "Sorting Algorithms",
        "Binary Trees",
        "Hash Tables",
        "Graph Algorithms",
        "Dynamic Programming",
        "Big O Notation",
        "Recursion",
        "Linked Lists",
      ],
      [
        "focus",
        "focus",
        "could appear",
        "focus",
        "could appear",
        "focus",
        "could appear",
        "explicitly not coming",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-12-01"),
      updatedAt: new Date("2025-01-15"),
    },
  },
  {
    name: "Betriebssysteme und verteilte Systeme 1",
    id: "BVS1_1328",
    state: "Scheduled",
    prepStatus: "Well Prepared",
    details: {
      scheduledDate: new Date("2025-02-11T09:00:00"),
      scheduledPlace: "6W1, 6S1",
      duration: 120,
      notes: "Präsenzprüfung, schriftlich - Prof. Bornemann",
    },
    topics: createTopics(
      [
        "Process Management",
        "Memory Management",
        "File Systems",
        "Synchronization",
        "Deadlocks",
        "System Calls",
        "Scheduling Algorithms",
        "Virtual Memory",
      ],
      [
        "focus",
        "focus",
        "could appear",
        "focus",
        "could appear",
        "could appear",
        "focus",
        "could appear",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-11-15"),
      updatedAt: new Date("2025-01-20"),
    },
  },
  {
    name: "Datenbanken",
    id: "DB_1348",
    state: "Scheduled",
    prepStatus: "Ready",
    details: {
      scheduledDate: new Date("2025-02-17T09:00:00"),
      scheduledPlace: "7W2",
      duration: 120,
      notes: "Präsenzprüfung, schriftlich - Prof. Behrend",
    },
    topics: createTopics(
      [
        "SQL Queries",
        "Database Design",
        "Normalization",
        "Transactions",
        "Indexing",
        "ACID Properties",
        "Entity Relationship Model",
        "Query Optimization",
      ],
      [
        "focus",
        "focus",
        "focus",
        "could appear",
        "could appear",
        "focus",
        "focus",
        "explicitly not coming",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-10-20"),
      updatedAt: new Date("2025-01-25"),
    },
  },
  {
    name: "Software Engineering",
    id: "SE_1318",
    state: "Scheduled",
    prepStatus: "In Progress",
    details: {
      scheduledDate: new Date("2025-03-06T13:00:00"),
      scheduledPlace: "HO-2 100",
      duration: 180,
      notes: "Präsenzprüfung, elektronisch - Prof. Nissen",
    },
    topics: createTopics(
      [
        "Agile Methodologies",
        "Software Architecture",
        "Design Patterns",
        "Testing Strategies",
        "Requirements Engineering",
        "Version Control",
        "Code Quality",
        "Project Management",
      ],
      [
        "focus",
        "could appear",
        "focus",
        "focus",
        "could appear",
        "explicitly not coming",
        "could appear",
        "focus",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-12-10"),
      updatedAt: new Date("2025-01-22"),
    },
  },
  {
    name: "Mathematik 1",
    id: "MA1_1132",
    state: "Scheduled",
    prepStatus: "Not Started",
    details: {
      scheduledDate: new Date("2025-02-13T11:30:00"),
      scheduledPlace: "H1, 7W2, 8W3",
      duration: 150,
      notes: "Präsenzprüfung, schriftlich - Prof. Rhein",
    },
    topics: createTopics(
      [
        "Linear Algebra",
        "Differential Calculus",
        "Integral Calculus",
        "Matrix Operations",
        "Vector Spaces",
        "Limits and Continuity",
        "Series and Sequences",
        "Complex Numbers",
      ],
      [
        "focus",
        "focus",
        "focus",
        "could appear",
        "could appear",
        "focus",
        "explicitly not coming",
        "could appear",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-11-01"),
      updatedAt: new Date("2025-01-10"),
    },
  },
  {
    name: "Praktische Informatik 1",
    id: "PI1_1143",
    state: "Coming Soon",
    prepStatus: "Well Prepared",
    details: {
      scheduledDate: new Date("2025-02-03T14:00:00"),
      scheduledPlace: "H1, 6S1",
      duration: 120,
      notes: "Präsenzprüfung, schriftlich - Prof. Cremer",
    },
    topics: createTopics(
      [
        "Object-Oriented Programming",
        "Data Structures",
        "Exception Handling",
        "File I/O Operations",
        "Collections Framework",
        "Inheritance and Polymorphism",
        "Abstract Classes",
        "Interfaces",
      ],
      [
        "focus",
        "focus",
        "could appear",
        "could appear",
        "focus",
        "focus",
        "could appear",
        "explicitly not coming",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-09-15"),
      updatedAt: new Date("2025-01-28"),
    },
  },
  {
    name: "IT-Sicherheit",
    id: "ITS_1453",
    state: "Scheduled",
    prepStatus: "In Progress",
    details: {
      scheduledDate: new Date("2025-02-10T09:00:00"),
      scheduledPlace: "6W1",
      duration: 120,
      notes: "Präsenzprüfung, schriftlich - Prof. Urban",
    },
    topics: createTopics(
      [
        "Cryptography Basics",
        "Network Security",
        "Authentication Methods",
        "Malware Analysis",
        "Security Protocols",
        "Risk Assessment",
        "Incident Response",
        "Penetration Testing",
      ],
      [
        "focus",
        "focus",
        "could appear",
        "explicitly not coming",
        "focus",
        "could appear",
        "could appear",
        "explicitly not coming",
      ]
    ),
    metaData: {
      createdAt: new Date("2024-12-05"),
      updatedAt: new Date("2025-01-18"),
    },
  },
  {
    name: "Maschinelles Lernen",
    id: "ML_8353",
    state: "Scheduled",
    prepStatus: "Not Started",
    details: {
      scheduledDate: new Date("2025-02-15T10:00:00"), // Nach Aushang oder Vereinbarung
      scheduledPlace: "TBD",
      duration: 45,
      notes:
        "Fernprüfung, mündlich - Prof. Rhein (nach Aushang oder Vereinbarung)",
    },
    topics: createTopics(
      [
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "Deep Learning",
        "Feature Engineering",
        "Model Evaluation",
        "Overfitting Prevention",
        "Ensemble Methods",
      ],
      [
        "focus",
        "could appear",
        "focus",
        "could appear",
        "focus",
        "focus",
        "could appear",
        "explicitly not coming",
      ]
    ),
    metaData: {
      createdAt: new Date("2025-01-05"),
      updatedAt: new Date("2025-01-26"),
    },
  },
];

// Helper function to get exams by state
export const getExamsByState = (state: tState): Exam[] => {
  return mockExams.filter((exam) => exam.state === state);
};

// Helper function to get exams by preparation status
export const getExamsByPrepStatus = (prepStatus: tPrepStatus): Exam[] => {
  return mockExams.filter((exam) => exam.prepStatus === prepStatus);
};

// Helper function to get upcoming exams (next 30 days)
export const getUpcomingExams = (): Exam[] => {
  const now = new Date();
  const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  return mockExams
    .filter(
      (exam) =>
        exam.details.scheduledDate >= now &&
        exam.details.scheduledDate <= thirtyDaysFromNow
    )
    .sort(
      (a, b) =>
        a.details.scheduledDate.getTime() - b.details.scheduledDate.getTime()
    );
};

// Helper function to get exam statistics
export const getExamStatistics = () => {
  const total = mockExams.length;
  const byState = mockExams.reduce((acc, exam) => {
    acc[exam.state] = (acc[exam.state] || 0) + 1;
    return acc;
  }, {} as Record<tState, number>);

  const byPrepStatus = mockExams.reduce((acc, exam) => {
    acc[exam.prepStatus] = (acc[exam.prepStatus] || 0) + 1;
    return acc;
  }, {} as Record<tPrepStatus, number>);

  return {
    total,
    byState,
    byPrepStatus,
  };
};
