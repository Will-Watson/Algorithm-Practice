//given an array of pairs representing the teams that have competed agains each other and an array containing the results of each competition, write a function that returns the winner of the tournament. the input arrays are named competitions and results, respectively. the competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. the results array contains information about the winner of each corresponding competition in the competitions array. specifically, results[i] denotes the winner of the competition[i], where 1 in the results array means the home team in the corresponding competition won and the 0 means that the away team won. Winning teams get three points while losing teams get 0 points. Return the tournament winner

function tournamentWinner(competitions, results) {
  const counter = {};
  //initializing a hash table
  for (let i = 0; i < competitions.length; i++) {
    //loop through the competitions array isolating each bout
    let brackets = competitions[i];
    //grab the bout
    let winner = results[i] ? 0 : 1;
    //inverse results[i] as 1 === homeTeam and 0 === awayTeam
    let result = brackets[winner];
    //grab the winning team name
    if (counter[result]) {
      counter[result] += 3;
    } else {
      counter[result] = 3;
    }
  }
  //adding each winning team to the hashtable with their respective three points.
  //if they exist in the hashtable already increment their points by three more.
  let champion;
  let score = 0;
  //assign place holders for next part
  for (let team in counter) {
    if (counter[team] > score) {
      score = counter[team];
      //score will hold the highest number of accumulated points
      champion = team;
      //everytime theres a higher score, champion will be assigned the team with the higher points name
    }
  }
  return champion;
}
