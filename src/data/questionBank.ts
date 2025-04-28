export type QuestionType = 'single' | 'list';
export type SportType = 'basketball' | 'football' | 'soccer' | 'baseball' | 'hockey' | 'golf' | 'tennis' | 'olympics';

export interface TriviaQuestion {
  question: string;
  answer: string | string[];
  sport: SportType;
  hints: [string, string];
  type: QuestionType;
}

export const questionBank: TriviaQuestion[] = [
  {
    question: "Who is the NFL’s all-time leading rusher?",
    answer: "Emmitt Smith",
    sport: "football",
    hints: ["Played for Cowboys and Cardinals", "Initials: E.S."],
    type: "single",
  },
  {
    question: "Who won the NBA Finals in 2023?",
    answer: "Denver Nuggets",
    sport: "basketball",
    hints: ["Led by Nikola Jokic", "First NBA title in franchise history"],
    type: "single",
  },
  {
    question: "Who won the FIFA World Cup in 2022?",
    answer: "Argentina",
    sport: "soccer",
    hints: ["Final went to penalties", "Led by Lionel Messi"],
    type: "single",
  },
  {
    question: "Name the Top 7 NBA All-Time Points Scorers",
    answer: [
      "LeBron James", "Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant", "Michael Jordan", "Dirk Nowitzki", "Wilt Chamberlain"
    ],
    sport: "basketball",
    hints: ["Includes both active and retired players", "Legends only - think greatest scorers"],
    type: "list",
  },
  {
    question: "Name the Top 7 NFL All-Time Rushing Yard Leaders",
    answer: [
      "Emmitt Smith", "Walter Payton", "Frank Gore", "Barry Sanders", "Adrian Peterson", "Curtis Martin", "LaDainian Tomlinson"
    ],
    sport: "football",
    hints: ["Legendary RBs", "Some recent retirees included"],
    type: "list",
  },
];
