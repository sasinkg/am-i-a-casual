// Generated April 2025

export interface TriviaQuestion {
  type: "single" | "list";
  sport: "basketball" | "football" | "soccer" | "baseball" | "hockey";
  question: string;
  answer: string[];
  hints: string[];
  day: number; // 0 = Sunday, 6 = Saturday
}

export const allQuestions: TriviaQuestion[] = [
  // --- Sunday (Very Easy) ---
  { day: 0, type: "single", sport: "basketball", question: "Who won the NBA Finals in 2024?", answer: ["Boston Celtics", "Celtics", "Boston"], hints: ["Team from Massachusetts", "Jayson Tatum plays for them"] },
  { day: 0, type: "single", sport: "football", question: "Who won Super Bowl LVIII (58)?", answer: ["Kansas City Chiefs", "Chiefs", "Kansas City"], hints: ["Back-to-back champs", "Mahomes"] },
  { day: 0, type: "single", sport: "soccer", question: "Which country won the 2022 FIFA World Cup?", answer: ["Argentina"], hints: ["Messi", "Buenos Aires"] },
  { day: 0, type: "single", sport: "baseball", question: "Which team is known as the 'Bronx Bombers'?", answer: ["New York Yankees", "Yankees"], hints: ["27 championships", "Pinstripes"] },
  { day: 0, type: "single", sport: "hockey", question: "What city are the Maple Leafs from?", answer: ["Toronto"], hints: ["Canada", "Blue & white"] },
  { day: 0, type: "single", sport: "basketball", question: "Who is known as 'The Greek Freak'?", answer: ["Giannis Antetokounmpo", "Giannis"], hints: ["Milwaukee Bucks", "MVP"] },
  { day: 0, type: "single", sport: "football", question: "Tom Brady played most of his career for which team?", answer: ["New England Patriots", "Patriots"], hints: ["Foxborough", "6 Super Bowls"] },
  { day: 0, type: "single", sport: "soccer", question: "Lionel Messi plays for what MLS team?", answer: ["Inter Miami", "Miami"], hints: ["Pink kit", "Beckham"] },
  { day: 0, type: "single", sport: "baseball", question: "Shohei Ohtani plays what two positions?", answer: ["Pitcher", "Hitter", "Designated Hitter"], hints: ["Two-way star", "Japanese legend"] },
  { day: 0, type: "single", sport: "hockey", question: "Who is considered the greatest hockey player ever?", answer: ["Wayne Gretzky", "Gretzky"], hints: ["The Great One", "Oilers"] },

  // Monday (Easy)
  { day: 1, type: "single", sport: "basketball", question: "Who is the NBA all-time leading scorer?", answer: ["LeBron James", "Lebron"], hints: ["Passed Kareem", "Lakers"] },
  { day: 1, type: "single", sport: "football", question: "Who holds the NFL record for most rushing yards?", answer: ["Emmitt Smith"], hints: ["Cowboys", "#22"] },
  { day: 1, type: "single", sport: "soccer", question: "Who is the all-time top scorer in international soccer?", answer: ["Cristiano Ronaldo", "CR7"], hints: ["Portugal", "SIUU"] },
  { day: 1, type: "single", sport: "baseball", question: "Who has the most home runs in MLB history?", answer: ["Barry Bonds"], hints: ["762 HR", "Giants"] },
  { day: 1, type: "single", sport: "hockey", question: "Who led the NHL in points in 2024-25?", answer: ["Nikita Kucherov", "Kucherov"], hints: ["Lightning", "Winger"] },
  { day: 1, type: "single", sport: "basketball", question: "Which team does Stephen Curry play for?", answer: ["Golden State Warriors", "Warriors"], hints: ["Bay Area", "Threes"] },
  { day: 1, type: "single", sport: "football", question: "Which team is known as 'America’s Team'?", answer: ["Dallas Cowboys", "Cowboys"], hints: ["Texas", "Star logo"] },
  { day: 1, type: "single", sport: "soccer", question: "Who is known as the 'Egyptian King'?", answer: ["Mohamed Salah", "Salah"], hints: ["Liverpool", "#11"] },
  { day: 1, type: "single", sport: "baseball", question: "What MLB team plays in Fenway Park?", answer: ["Boston Red Sox", "Red Sox"], hints: ["Green Monster", "AL East"] },
  { day: 1, type: "single", sport: "hockey", question: "Sidney Crosby plays for which NHL team?", answer: ["Pittsburgh Penguins", "Penguins"], hints: ["Black and gold", "#87"] },

  // --- Tuesday (Medium) ---
  { day: 2, type: "single", sport: "basketball", question: "Who won the NBA MVP for 2024?", answer: ["Nikola Jokic", "Jokic"], hints: ["Denver Nuggets", "Center"] },
  { day: 2, type: "single", sport: "football", question: "Who was the NFL MVP for 2023-24 season?", answer: ["Lamar Jackson", "Lamar"], hints: ["Ravens QB", "Dual-threat"] },
  { day: 2, type: "single", sport: "soccer", question: "Which team won the 2024 UEFA Champions League?", answer: ["Real Madrid", "Madrid"], hints: ["White kits", "Spain"] },
  { day: 2, type: "single", sport: "baseball", question: "Who led MLB in home runs in 2023-24?", answer: ["Matt Olsen", "Olsen"], hints: ["Braves", "54 HR"] },
  { day: 2, type: "single", sport: "hockey", question: "Which team won the 2023 Stanley Cup?", answer: ["Vegas Golden Knights", "Golden Knights", "Vegas"], hints: ["Las Vegas", "Gold uniforms"] },
  { day: 2, type: "single", sport: "basketball", question: "Who is nicknamed 'The Joker' in the NBA?", answer: ["Nikola Jokic", "Jokic"], hints: ["Denver Nuggets", "MVP"] },
  { day: 2, type: "single", sport: "football", question: "Which team drafted Caleb Williams #1 in 2024?", answer: ["Chicago Bears", "Bears"], hints: ["Windy City", "Blue and orange"] },
  { day: 2, type: "single", sport: "soccer", question: "Who won the 2024 Copa America?", answer: ["Argentina"], hints: ["Messi", "South American powerhouse"] },
  { day: 2, type: "single", sport: "baseball", question: "Who won the 2024 National League MVP?", answer: ["Shohei Ohtani", "Ohtani"], hints: ["Two-way superstar", "Japanese legend"] },
,

  // --- Wednesday (Medium-Hard) ---
  { day: 3, type: "single", sport: "basketball", question: "Which team drafted Victor Wembanyama?", answer: ["San Antonio Spurs", "Spurs", "San Antonio"], hints: ["Texas team", "Gregg Popovich"] },
  { day: 3, type: "single", sport: "football", question: "Which team selected Ben Simmons first overall in 2016?", answer: ["76ers", "Philadelphia 76ers", "Philly"], hints: ["Blue, Red and White", "Embiid!"] },
  { day: 3, type: "single", sport: "soccer", question: "Who won the 2024 Ballon d'Or?", answer: ["Rodri", "Rodrigo Hernandez"], hints: ["Manchester City", "Spanish midfielder"] },
  { day: 3, type: "single", sport: "baseball", question: "What was Babe Ruth's real first name?", answer: ["George"], hints: ["He's very Curious", "Common name"] },
  { day: 3, type: "single", sport: "hockey", question: "What arena do the San Jose Sharks play at?", answer: ["SAP Center"], hints: ["Shark Tank", "Software company"] },
  { day: 3, type: "single", sport: "soccer", question: "How many teams play in the Premier League every year?", answer: ["20", "Twenty"], hints: ["38 games each", "Dutch team with same name"] },
  { day: 3, type: "single", sport: "basketball", question: "What college did Kevin Durant play for?", answer: ["Texas", "Texas Longhorns"], hints: ["Burnt orange", "Big 12"] },
  { day: 3, type: "single", sport: "football", question: "How many Super Bowls have the Detroit Lions won?", answer: ["0", "Zero"], hints: ["They've never appeared in one", "NFC North team"] },
  { day: 3, type: "single", sport: "soccer", question: "Who manages Manchester City in 2024?", answer: ["Pep Guardiola", "Guardiola"], hints: ["Spanish coach", "Tiki-taka"] },
  { day: 3, type: "single", sport: "baseball", question: "Which MLB team is known for 'Moneyball'?", answer: ["Oakland Athletics", "Athletics", "A's"], hints: ["Green & gold", "Billy Beane"] }
,

  // --- Thursday (Hard) ---
  { day: 4, type: "single", sport: "basketball", question: "Who averages more points: Anthony Edwards or Jayson Tatum?", answer: ["Anthony Edwards", "Edwards", "Ant"], hints: ["Paid child support", "Hint is a joke!"] },
  { day: 4, type: "single", sport: "football", question: "Who had more yards the 2024-25 season: Terry McLaurin or Brock Bowers?", answer: ["Brock Bowers", "Bowers"], hints: ["UGA star", "Rookie tight end"] },
  { day: 4, type: "single", sport: "soccer", question: "Who was the top scorer in the 2017-18 Premier League?", answer: ["Mohamed Salah", "Mo Salah", "Salah"], hints: ["#11 Liverpool", "Egyptian King"] },
  { day: 4, type: "single", sport: "baseball", question: "Who won the 2023 AL MVP?", answer: ["Shohei Ohtani", "Ohtani"], hints: ["Two-way", "Japanese player"] },
  { day: 4, type: "single", sport: "hockey", question: "Which NHL player is nicknamed 'The Breadman'?", answer: ["Artemi Panarin", "Panarin"], hints: ["NY Rangers", "Russian winger"] },
  { day: 4, type: "single", sport: "basketball", question: "Who won the first NBA In-Season Tournament in 2023?", answer: ["Los Angeles Lakers", "Lakers"], hints: ["Purple and gold", "LeBron"] },
  { day: 4, type: "single", sport: "football", question: "Who led the NFL in interceptions in 2022-23?", answer: ["Justin Simmons", "Simmons"], hints: ["Denver Broncos", "Safety"] },
  { day: 4, type: "single", sport: "soccer", question: "Which nation won Euro 2020 (played in 2021)?", answer: ["Italy"], hints: ["Azzurri", "Won on penalties"] },
  { day: 4, type: "single", sport: "baseball", question: "Who pitched a perfect game in 2023?", answer: ["Domingo German", "German"], hints: ["Yankees", "Against Oakland"] },
  { day: 4, type: "single", sport: "hockey", question: "Which player has the most points in NHL history after Gretzky?", answer: ["Jaromir Jagr", "Jagr"], hints: ["Czech legend", "Flowing hair"] }
,

  // --- Friday (Very Hard) ---
  { day: 5, type: "single", sport: "basketball", question: "Who won NBA Defensive Player of the Year in 2025?", answer: ["Evan Mobley", "Mobley"], hints: ["Cavaliers forward", "Elite shot blocker"] },
  { day: 5, type: "single", sport: "football", question: "Most sacks in 2024-25 NFL season?", answer: ["Trey Hendrickson", "Hendrickson"], hints: ["Bengal tiger!", "Wears #91"] },
  { day: 5, type: "single", sport: "soccer", question: "Who finished 2nd in the 2024-25 Premier League?", answer: ["Arsenal"], hints: ["Gunners", "North London"] },
  { day: 5, type: "single", sport: "baseball", question: "Best regular season MLB record 2023-24?", answer: ["Atlanta Braves", "Braves"], hints: ["NL East", "Red/navy"] },
  { day: 5, type: "single", sport: "hockey", question: "Conn Smythe Trophy winner 2024?", answer: ["Jack Eichel", "Eichel"], hints: ["Vegas", "Former Sabre"] },
  { day: 5, type: "single", sport: "basketball", question: "Who led the NBA in triple-doubles in 2024-25 Regular Season?", answer: ["Nikola Jokic", "Jokic"], hints: ["Nuggets", "34 triple-doubles"] },
  { day: 5, type: "single", sport: "football", question: "Which NFL team allowed the fewest points in 2023-24?", answer: ["Baltimore Ravens", "Ravens"], hints: ["Purple team", "AFC North"] },
  { day: 5, type: "single", sport: "soccer", question: "Which EPL goalkeeper had the most clean sheets in 2021-22?", answer: ["Alisson", "Alisson Becker"], hints: ["Liverpool", "Brazilian"] },
  { day: 5, type: "single", sport: "baseball", question: "Who won the 2023 NL Cy Young?", answer: ["Blake Snell", "Snell"], hints: ["Padres", "Two-time winner"] },
  { day: 5, type: "single", sport: "hockey", question: "Who had the most goals in the 2023-24 NHL season?", answer: ["Auston Matthews", "Matthews"], hints: ["Maple Leafs", "Sniper"] }
,

  // --- Saturday (Top 7 Challenge) ---
  { day: 6, type: "list", sport: "basketball", question: "Top 7 NBA all-time scorers?", answer: ["LeBron James", "Kareem Abdul-Jabbar", "Karl Malone", "Kobe Bryant", "Michael Jordan", "Dirk Nowitzki", "Wilt Chamberlain"], hints: ["Lakers and Bulls legends"] },
  { day: 6, type: "list", sport: "football", question: "Top 7 NFL career rushing yards?", answer: ["Emmitt Smith", "Walter Payton", "Frank Gore", "Barry Sanders", "Adrian Peterson", "Curtis Martin", "LaDainian Tomlinson"], hints: ["Hall of Fame RBs"] },
  { day: 6, type: "list", sport: "soccer", question: "Top 7 Champions League winning clubs?", answer: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich", "Barcelona", "Ajax", "Manchester United"], hints: ["Spain, Germany, England"] },
  { day: 6, type: "list", sport: "baseball", question: "Top 7 MLB World Series winners?", answer: ["New York Yankees", "St. Louis Cardinals", "Boston Red Sox", "Oakland Athletics", "San Francisco Giants", "Los Angeles Dodgers", "Cincinnati Reds"], hints: ["Yankees dominant"] },
  { day: 6, type: "list", sport: "hockey", question: "Top 7 NHL Stanley Cup wins?", answer: ["Montreal Canadiens", "Toronto Maple Leafs", "Detroit Red Wings", "Boston Bruins", "Chicago Blackhawks", "Edmonton Oilers", "Pittsburgh Penguins"], hints: ["Original Six"] },
  { day: 6, type: "list", sport: "basketball", question: "Top 7 NBA players with most MVP awards?", answer: ["Kareem Abdul-Jabbar", "Michael Jordan", "Bill Russell", "LeBron James", "Wilt Chamberlain", "Magic Johnson", "Moses Malone"], hints: ["Icons of different eras"] },
  { day: 6, type: "list", sport: "football", question: "Top 7 NFL QBs in career passing touchdowns?", answer: ["Tom Brady", "Drew Brees", "Peyton Manning", "Brett Favre", "Aaron Rodgers", "Philip Rivers", "Dan Marino"], hints: ["Modern era greats"] },
  { day: 6, type: "list", sport: "soccer", question: "Top 7 goal scorers in World Cup history?", answer: ["Miroslav Klose", "Ronaldo Nazário", "Gerd Muller", "Just Fontaine", "Lionel Messi", "Pele", "Kylian Mbappe"], hints: ["Multiple decades"] },
  { day: 6, type: "list", sport: "baseball", question: "Top 7 MLB home run leaders?", answer: ["Barry Bonds", "Hank Aaron", "Babe Ruth", "Alex Rodriguez", "Albert Pujols", "Willie Mays", "Ken Griffey Jr."], hints: ["Legends across generations"] },
  { day: 6, type: "list", sport: "hockey", question: "Top 7 NHL all-time point leaders?", answer: ["Wayne Gretzky", "Jaromir Jagr", "Mark Messier", "Gordie Howe", "Ron Francis", "Marcel Dionne", "Steve Yzerman"], hints: ["Top 7 scorers ever"] }
];
