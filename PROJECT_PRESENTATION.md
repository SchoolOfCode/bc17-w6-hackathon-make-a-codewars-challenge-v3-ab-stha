Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)


# SoC Bc17 W6 Hackathon - Building a Coding Kata - ab-stha

Description: To build a function that determines whether the next card is higher in value or lower. And if the user guesses correct, to keep going. If the user guesses incorrectly, to stop the code.


## ReadMe

This was supposed to be a higher or lower type of game whereby you have 52 cards and you would guess higher or lower as the program randomly presents one of the cards from the deck. If the cards have been shown, they get removed from the deck.

There are 13 cards of each suit so 52 cards in total:
 ♠️ 13 spades
 ♣️ 13 clubs
 ♥️ 13 hearts
 ♦️ 13 diamonds

The program should loop through until either all of the cards in the deck have been empy, or until the user guesses wrong.

The suit of the card does not hold any value e.g 13 of spades > 12 of clubs.

Due to the scope of this, I was not successful in providing a framework for this kata. If I had more time, I would have been able to finish this such that the kata would be to design a function:

```
export function isHigher () {   // 
    // Code block
};
```

such that depending on if that is true, the program will continue to loop through the iterations or it will stop, depending on if 
the user guessed correctly whether the next card is higher or lower.

Since my framework code doesn't quite work, even if your function is correct, the test will fail. Sorry 😞.



## Initialisation & Installation

    ### Steps:

        1. npm install and init if you need to
        2. read through program.js and app.js and try to understand
        3. if you run node app.js now, after the first iteration
            it will break.
        4. this is because you need to define the function isHigher()
            located in the main.js file.


## My plan - Higher or lower game

### 1- Set up the skeleton for the higher or lower game:
    1.1- Array of 52 cards called deck - array of 4 suits
        ♣️ Array of 13 cards called clubs
        ♠️ Array of 13 cards called spades
        ♥️ Array of 13 cards called hearts
        ♦️ Array of 13 cards called diamonds
    1.2- Randomly pick out of the 4 options from deck
    1.3- Switch case scenario for each of the 4 options
        - In each scenario randomly pick one of the 13 cards
            in that suit
        - Then filter out that picked card from that array
    1.4- While loop
        - Ask if user picked higher, lower, or N for stop
        - If picked higher or lower, and if atleast one array is
            still empty, keep looping.
        - If picked N then stop loop.

## Reflections

 - I would probably have spent more time in the ideation phase. This is because I thought of Higher and Lower and immediately stuck with it because of the idea. Had I considered the time constraint, I would have picked something simpler.
 - Additionally, I think that I should have considered MVPS. For this week (being QA and testing), I did not have any deliverable MVPS as I was not able to create a working test for the kata.



