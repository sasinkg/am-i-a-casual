// Generated April 2025

export interface TriviaQuestion {
    type: 'single' | 'list';
    sport: 'basketball' | 'football' | 'soccer' | 'baseball' | 'hockey';
    question: string;
    answer: string | string[];
    hints: string[];
  }
  
  // SUNDAY (Very Easy)
  export const sundayQuestions: TriviaQuestion[] = [
    { type: 'single', sport: 'basketball', question: 'Who won the NBA Finals in 2024?', answer: ['Boston Celtics','Celtics', 'Boston'], hints: ['Team from Massachusetts', 'Jayson Tatum plays for them'] },
    { type: 'single', sport: 'football', question: 'Who won Super Bowl LVIII (58)?', answer: ['Kansas City Chiefs', 'Kansas City', 'Chiefs'], hints: ['Won their second in a row in 2024', 'Red and gold colors'] },
    { type: 'single', sport: 'soccer', question: 'Which country won the 2022 FIFA World Cup?', answer: 'Argentina', hints: ['Lionel Messi', 'Their capital is Buenos Aires'] },
    { type: 'single', sport: 'baseball', question: 'Who won the 2024 World Series?', answer: ['Los Angeles Dodgers', 'LA', 'Dodgers', 'Los Angeles'], hints: ['Blue team', 'West Coast'] },
    { type: 'single', sport: 'hockey', question: 'Who is considered the greatest hockey player ever?', answer: ['Wayne Gretzky', 'Gretzy'], hints: ['\"The Great One\"', 'Edmonton Oilers legend'] },
  ];
  
  // MONDAY (Easy)
  export const mondayQuestions: TriviaQuestion[] = [
    { type: 'single', sport: 'basketball', question: 'Who is the NBA all-time leading scorer?', answer: ['LeBron James', 'Lebron'], hints: ['Passed Kareem Abdul-Jabbar', 'Lakers'] },
    { type: 'single', sport: 'football', question: 'Who holds the NFL record for most career rushing yards?', answer: ['Emmitt Smith', "Smith"], hints: ['Cowboys RB', 'Initials E.S.'] },
    { type: 'single', sport: 'soccer', question: 'Who is the all-time top scorer in international soccer?', answer: ['Cristiano Ronaldo', 'Ronaldo', 'CR7', 'Cristiano'], hints: ['Portugal', 'CR7'] },
    { type: 'single', sport: 'baseball', question: 'Who has the most career home runs in MLB history?', answer: 'Barry Bonds', hints: ['760 home runs', 'Giants legend'] },
    { type: 'single', sport: 'hockey', question: 'Who led the NHL in points during the 2024-25 season?', answer: ['Nikita Kucherov', 'Kucherov'], hints: ['Tampa Bay Lightning', 'Recently broke all-time record'] },
  ];
  
  // TUESDAY (Medium)
  export const tuesdayQuestions: TriviaQuestion[] = [
    { type: 'single', sport: 'basketball', question: 'Which player won the NBA MVP for 2024?', answer: ['Nikola Jokic', 'Jokic'], hints: ['Center', 'Denver Nuggets'] },
    { type: 'single', sport: 'football', question: 'Who was the NFL MVP for the 2024 season?', answer: ['Lamar Jackson', 'Lamar'], hints: ['Ravens QB', 'Dual-threat'] },
    { type: 'single', sport: 'soccer', question: 'Which team won the 2024 UEFA Champions League?', answer: ['Real Madrid', 'Madrid'], hints: ['Spanish giants', 'White kits'] },
    { type: 'single', sport: 'baseball', question: 'Who led MLB in home runs in 2024?', answer: 'Aaron Judge', hints: ['Yankees', '62 HR in 2022'] },
    { type: 'single', sport: 'hockey', question: 'Which team won the 2023 Stanley Cup?', answer: ['Vegas Golden Knights', 'Golden Knights', 'Las Vegas'], hints: ['Las Vegas team', 'Gold uniforms'] },
  ];
  
  // WEDNESDAY (Medium-Hard)
  export const wednesdayQuestions: TriviaQuestion[] = [
    { type: 'single', sport: 'basketball', question: 'Which team drafted Victor Wembanyama?', answer: ['San Antonio Spurs','Spurs','San Antonio'], hints: ['Texas team', 'Gregg Popovich coach'] },
    { type: 'single', sport: 'football', question: 'Which team selected Caleb Williams first overall in 2024?', answer: ['Chicago Bears', 'Bears', 'Chicago'], hints: ['Windy City', 'Blue and orange'] },
    { type: 'single', sport: 'soccer', question: "Who won the 2024 Ballon d'Or?", answer: ["Rodri", "Rodrigo Hernandez"], hints: ["Plays for Manchester City", "Spanish midfielder"] },
    { type: 'single', sport: 'baseball', question: "What was Babe Ruth's real name?", answer: "George", hints: ["Curious", "Common name"] },
    { type: 'single', sport: 'hockey', question: "What arena do the San Jose Sharks play at?", answer: "SAP Center", hints: ["Shark Tank", "Software company"] },
  ];
  
  // THURSDAY (Hard)
  export const thursdayQuestions: TriviaQuestion[] = [
    { type: 'single', sport: 'basketball', question: 'Who averages more points: Anthony Edwards or Jayson Tatum?', answer: ['Ant', 'Anthony Edwards', 'Edwards'], hints: ['Paid child support', 'Hint is a joke!'] },
    { type: 'single', sport: 'football', question: 'Who had more yards the 2024-25 season: Terry McLaurin or Brock Bowers?', answer: ['Brock Bowers', 'Bowers'], hints: ['UGA star', 'Rookie tight end'] },
    { type: 'single', sport: 'soccer', question: "Who was the top scorer in the 2017-18 Premier League?", answer: ["Mohammed Salah", "Salah", "Mo Salah"], hints: ["#11 Liverpool", "Egyptian King"] },
    { type: 'single', sport: 'baseball', question: "Who won the 2023 AL MVP?", answer: ['Shohei Ohtani', 'Ohtani'], hints: ['Two-way', 'Japanese player'] },
    { type: 'single', sport: 'hockey', question: "Which NHL player is nicknamed 'The Breadman'?", answer: ['Artemi Panarin', 'Panarin'], hints: ['NY Rangers', 'Russian winger'] },
  ];
  
  // FRIDAY (Very Hard)
  export const fridayQuestions: TriviaQuestion[] = [
    { type: 'single', sport: 'basketball', question: 'Who won NBA Defensive Player of the Year 2025?', answer: ['Victor Wembanyama', 'Wemby'], hints: ['7-foot-4 rookie', 'Spurs'] },
    { type: 'single', sport: 'football', question: 'Most sacks in 2024 NFL season?', answer: ['Micah Parsons', 'Parsons'], hints: ['Cowboys Edge', 'Linebacker'] },
    { type: 'single', sport: 'soccer', question: 'Who finished 2nd in the 2024-25 Premier League?', answer: 'Arsenal', hints: ['Gunners', 'North London'] },
    { type: 'single', sport: 'baseball', question: 'Best regular season MLB record 2024?', answer: ['Atlanta Braves', 'Braves'], hints: ['NL East', 'Red/navy'] },
    { type: 'single', sport: 'hockey', question: 'Conn Smythe Trophy winner 2024?', answer: ['Jack Eichel', 'Eichel'], hints: ['Vegas', 'Former Sabre'] },
  ];
  
  // SATURDAY (Top 7 Challenges)
  export const saturdayQuestions: TriviaQuestion[] = [
    { type: 'list', sport: 'basketball', question: 'Top 7 NBA all-time scorers?', answer: ['LeBron James', 'Kareem Abdul-Jabbar', 'Karl Malone', 'Kobe Bryant', 'Michael Jordan', 'Dirk Nowitzki', 'Wilt Chamberlain'], hints: ['Lakers and Bulls legends'] },
    { type: 'list', sport: 'football', question: 'Top 7 NFL career rushing yards?', answer: ['Emmitt Smith', 'Walter Payton', 'Frank Gore', 'Barry Sanders', 'Adrian Peterson', 'Curtis Martin', 'LaDainian Tomlinson'], hints: ['Hall of Fame RBs'] },
    { type: 'list', sport: 'soccer', question: 'Top 7 Champions League winning clubs?', answer: ['Real Madrid', 'AC Milan', 'Liverpool', 'Bayern Munich', 'Barcelona', 'Ajax', 'Manchester United'], hints: ['Spain, Germany, England'] },
    { type: 'list', sport: 'baseball', question: 'Top 7 MLB World Series winners?', answer: ['New York Yankees', 'St. Louis Cardinals', 'Boston Red Sox', 'Oakland Athletics', 'San Francisco Giants', 'Los Angeles Dodgers', 'Cincinnati Reds'], hints: ['Yankees dominant'] },
    { type: 'list', sport: 'hockey', question: 'Top 7 NHL Stanley Cup wins?', answer: ['Montreal Canadiens', 'Toronto Maple Leafs', 'Detroit Red Wings', 'Boston Bruins', 'Chicago Blackhawks', 'Edmonton Oilers', 'Pittsburgh Penguins'], hints: ['Original Six'] },
  ];
  