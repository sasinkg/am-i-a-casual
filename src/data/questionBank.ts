// Generated April 2025

export interface TriviaQuestion {
    type: 'single' | 'list';
    sport: 'basketball' | 'football' | 'soccer' | 'baseball' | 'hockey';
    question: string;
    answer: string | string[];
    hints: string[];
  }
  
  export const questionBank: TriviaQuestion[] = [
    // --- Sunday (Easiest) ---
    { type: 'single', sport: 'basketball', question: 'Who won the NBA Finals in 2024?', answer: ['Boston Celtics','Celtics', 'Boston'], hints: ['Team from Massachusetts', 'Jayson Tatum plays for them'] },
    { type: 'single', sport: 'football', question: 'Who won Super Bowl LVIII (58)?', answer: ['Kansas City Chiefs', 'Kansas City', 'Chiefs'], hints: ['Won their second in a row in 2024', 'Red and gold colors'] },
    { type: 'single', sport: 'soccer', question: 'Which country won the 2022 FIFA World Cup?', answer: 'Argentina', hints: ['Lionel Messi', 'Their capital is Buenos Aires'] },
    { type: 'single', sport: 'baseball', question: 'Who won the 2024 World Series?', answer: ['Los Angeles Dodgers', 'LA', 'Dodgers', "Los Angeles"], hints: ['Blue team', 'West Coast'] },
    { type: 'single', sport: 'hockey', question: 'Who is considered the greatest hockey player ever?', answer: ['Wayne Gretzky', 'Gretzy'], hints: ['"The Great One"', 'Edmonton Oilers legend'] },

    // --- Monday (Easy) ---
    { type: 'single', sport: 'basketball', question: 'Who is the NBA all-time leading scorer?', answer: ['LeBron James', 'Lebron'], hints: ['Passed Kareem Abdul-Jabbar', 'Lakers'] },
    { type: 'single', sport: 'football', question: 'Who holds the NFL record for most career rushing yards?', answer: ['Emmitt Smith', "Smith"], hints: ['Cowboys RB', 'Initials E.S.'] },
    { type: 'single', sport: 'soccer', question: 'Who is the all-time top scorer in international soccer?', answer: ['Cristiano Ronaldo', "Ronaldo", 'CR7', "Cristiano"], hints: ['Portugal', 'CR7'] },
    { type: 'single', sport: 'baseball', question: 'Who has the most career home runs in MLB history?', answer: 'Barry Bonds', hints: ['760 home runs', 'Giants legend'] },
    { type: 'single', sport: 'hockey', question: 'Who led the NHL in points during the 2024-25 season?', answer: ['Nikita Kucherov', 'Kucherov'], hints: ['Tampa Bay Lightning', 'Recently broke all time scoring record previously held by Gretzky'] },

    // --- Tuesday (Medium) ---
    { type: 'single', sport: 'basketball', question: 'Which player won the NBA MVP for 2024?', answer: ['Nikola Jokic', 'Jokic'], hints: ['Center', 'Denver Nuggets'] },
    { type: 'single', sport: 'football', question: 'Who was the NFL MVP for the 2024 season?', answer: ['Lamar Jackson', 'Lamar'], hints: ['Ravens QB', 'Dual-threat'] },
    { type: 'single', sport: 'soccer', question: 'Which team won the 2024 UEFA Champions League?', answer: ['Real Madrid', 'Madrid'], hints: ['Spanish giants', 'White kits'] },
    { type: 'single', sport: 'baseball', question: 'Who led MLB in home runs in 2024?', answer: 'Aaron Judge', hints: ['Yankees', '62 HR in 2022'] },
    { type: 'single', sport: 'hockey', question: 'Which team won the 2024 Stanley Cup?', answer: ['Vegas Golden Knights', 'Golden Knights', "Las Vegas"], hints: ['Las Vegas team', 'Gold uniforms'] },

    // --- Wednesday (Medium-Hard) ---
    { type: 'single', sport: 'basketball', question: 'Which team drafted Victor Wembanyama?', answer: ['San Antonio Spurs','Spurs','San Antonio'], hints: ['Texas team', 'Gregg Popovich coach'] },
    { type: 'single', sport: 'football', question: 'Which team selected Caleb Williams first overall in 2024?', answer: ['Chicago Bears', 'Bears', 'Chicago'], hints: ['Windy City', 'Blue and orange'] },
    { type: 'single', sport: 'soccer', question: "Who won the 2024 Ballon d'Or?", answer: ["Rodri", "Rodrigo Hernandez"], hints: ["Plays for Manchester City", "Spanish midfielder"] },
    { type: 'single', sport: 'baseball', question: "What was Babe Ruth's real name", answer: "George", hints: ["He's very curious", "A very common name, notably the name of one of the three main characters in Seinfeld."] },
    { type: 'single', sport: 'hockey', question: "What arena do the San Jose Sharks play at?", answer: "SAP Center", hints: ["Called the Shark Tank", "Named after a very famous German software company"] },

    // --- Thursday (Medium-Hard) ---
    { type: 'single', sport: 'basketball', question: 'Who averages more points: Anthony Edwards or Jayson Tatum?', answer: ['Ant', 'Anthony Edwards', 'Edwards'], hints: ['He paid child support (emphasis on paid)', 'only one hint silly!'] },
    { type: 'single', sport: 'football', question: 'Who had more yards the 2024-25 regular season: Terry McLaurin or Brock Bowers', answer: ['Bowers', 'Brock Bowers'], hints: ['He went to University of Georgia!', 'only one hint silly!'] },
    { type: 'single', sport: 'soccer', question: "Who was the top scorer in the 2017-18 Premier League?", answer: ["Mohammed Salah", "Salah", "Mo Salah"], hints: ["He wears number 11", "He is Egyptian"] },
// --- Thursday (continued) ---
{ type: 'single', sport: 'baseball', question: "Who won the 2023 MLB MVP (American League)?", answer: ["Shohei Ohtani", "Ohtani"], hints: ["Two-way superstar", "Japanese player"] },
{ type: 'single', sport: 'hockey', question: "Which NHL player is nicknamed 'The Breadman'?", answer: ["Artemi Panarin", "Panarin"], hints: ["Plays for New York Rangers", "Russian winger"] },


// --- Friday (Very Hard) ---
{ type: 'single', sport: 'basketball', question: "Who was the NBA Defensive Player of the Year in 2025?", answer: ["Victor Wembanyama", "Wemby"], hints: ["7-foot-4 rookie sensation", "San Antonio Spurs"] },
{ type: 'single', sport: 'football', question: "Which defensive player had the most sacks in 2024 NFL season?", answer: ["Micah Parsons", "Parsons"], hints: ["Dallas Cowboys", "Linebacker/Edge"] },
{ type: 'single', sport: 'soccer', question: "Which team finished 2nd in the 2024-25 Premier League?", answer: ["Arsenal"], hints: ["North London club", "Gunners"] },
{ type: 'single', sport: 'baseball', question: "Which team had the best regular season record in MLB 2024?", answer: ["Atlanta Braves", "Braves"], hints: ["Won NL East", "Red and Navy Blue"] },
{ type: 'single', sport: 'hockey', question: "Which player won the Conn Smythe Trophy in 2024 (Stanley Cup MVP)?", answer: ["Jack Eichel", "Eichel"], hints: ["Vegas Golden Knights", "Former Buffalo Sabres player"] },

// --- Saturday (Top 7 Challenges) ---
{ type: 'list', sport: 'basketball', question: "Name the Top 7 all-time NBA points scorers.", answer: ["LeBron James", "Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant", "Michael Jordan", "Dirk Nowitzki", "Wilt Chamberlain"], hints: ["Includes Lakers legends", "Includes 90s Bulls star"] },
{ type: 'list', sport: 'football', question: "Name the Top 7 NFL players with most career rushing yards.", answer: ["Emmitt Smith", "Walter Payton", "Frank Gore", "Barry Sanders", "Adrian Peterson", "Curtis Martin", "LaDainian Tomlinson"], hints: ["Includes Cowboys and Bears legends", "Hall of Fame running backs"] },
{ type: 'list', sport: 'soccer', question: "Name the Top 7 clubs with the most Champions League titles.", answer: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich", "Barcelona", "Ajax", "Manchester United"], hints: ["Spanish, German, Italian dominance", "At least 3 English clubs"] },
{ type: 'list', sport: 'baseball', question: "Name the Top 7 MLB teams with most World Series titles.", answer: ["New York Yankees", "St. Louis Cardinals", "Boston Red Sox", "Oakland Athletics", "San Francisco Giants", "Los Angeles Dodgers", "Cincinnati Reds"], hints: ["NY dominance", "Historic franchises"] },
{ type: 'list', sport: 'hockey', question: "Name the Top 7 NHL teams with most Stanley Cup wins.", answer: ["Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins", "Chicago Blackhawks", "Edmonton Oilers", "Pittsburgh Penguins"], hints: ["Original Six teams", "Canadian success"] },

  ];
  