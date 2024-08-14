import readline from 'readline';

//import isHigher from './main.js';
import isHigher from './main.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Define each suit as an array (of 13 cards)
let clubs = [1,2,3,4,5,6,7,8,9,10,11,12,13];  //deck[0]
let spades = [1,2,3,4,5,6,7,8,9,10,11,12,13];  //deck[1]
let hearts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let diamonds = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// Create an array of 4 suits
const deck = [clubs, spades, hearts, diamonds];
// let isHigher = true;
let previousCard = null;

export async function wholeProgram() {
    // Log a random index for the deck array which returns a random number between 1-4
    const randomIndex = Math.floor(Math.random()*deck.length);
    console.log("randomIndex from deck array: ", randomIndex);
    // Log a random suit from the deck
    const randomSuit = deck[randomIndex];
    // Create a random card which is a randon number up to 13
    const randomCard = Math.floor(Math.random()*13) + 1;
    
    // Switch case scenario for each option of suit
    switch(randomIndex) {
        case 0:
            console.log("suit picked: clubs");

            console.log("Random card generated: ", randomCard + " of clubs")
    
            clubs = clubs.filter(item => item !==randomCard);
            console.log("New clubs array is: ", clubs);
          break;
    
        case 1:
            console.log("suit picked: spades");

            console.log("Random card generated: ", randomCard + " of spades")
    
            spades = spades.filter(item => item !==randomCard);
            console.log("New spades array is: ", spades);
            console.log("randomNumber: ", randomCard);

          break;
    
          case 2:
            console.log("suit picked: hearts");
            
            console.log("Random card generated: ", randomCard + " of hearts")
    
            hearts = hearts.filter(item => item !==randomCard);
            console.log("New hearts array is: ", hearts);
          break;
    
          case 3:
            console.log("suit picked: diamonds");

            console.log("Random card generated: ", randomCard + " of diamonds")
    
            diamonds = diamonds.filter(item => item !==randomCard);
            console.log("New diamonds array is: ", diamonds);
          break;
    
        default:
          console.log("something's wrong fosho")
      };
    
      // Ask user whether to reshuffle or stop
      return new Promise((resolve) => {
        rl.question('Higher or Lower? H for higher, L for lower, or N to stop: ', (userInput) => {
          if (userInput.toUpperCase() === 'N') {
            // closes readline interface
            rl.close();
            // ends loop
            resolve(false);
            // if user picked higher
          } else if (userInput.toUpperCase() === 'H'){
            isHigher(randomCard, previousCard); // should return true for this to resolve
            console.log({'random card' : randomCard, 'previous card' : previousCard});
            console.log(isHigher(randomCard, previousCard));
            resolve((clubs.length > 0 || spades.length > 0 || hearts.length > 0 || diamonds.length > 0) && (isHigher() === true)); // only resolves if isHigher returns true
            console.log('resolve worked at line 89!')
          } else if (userInput.toUpperCase() === 'L'){ // if user has picked lower
            // Continue if any suits have cards left and if isHigher is false
            isHigher(randomCard, previousCard); // should return false for this to to resolve
            console.log({'random card' : randomCard, 'previous card' : previousCard});
            console.log(isHigher(randomCard, previousCard));
            resolve((clubs.length > 0 || spades.length > 0 || hearts.length > 0 || diamonds.length > 0) && (isHigher() === false));
            console.log('resolve worked at line 95!');
          } else {
            console.log('you can either write h, l, or n');
          }
        });
      }) .then(() => {
        // Log the previous card
        console.log("previous card was: ", previousCard);
        // Log the randomCard just generated
        console.log("random card just generated now is: ", randomCard);

        // Update previousCard after user input is processed
        previousCard = randomCard;
        console.log("Previous card (for next iteration) is now: ", previousCard);
      });
    };