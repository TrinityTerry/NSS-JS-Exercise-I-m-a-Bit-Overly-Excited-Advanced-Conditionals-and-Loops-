/* Trinity Terry
Date Created:1/14/2018
Date Edited: 1/14/2018 */

// Create an array of words in a sentence that describes you.
// Create an overlyExcited function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.
// Then add logic to overlyExcited that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.
// The technical phrasing of the task ahead: If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.
// Use this starter code to complete your exercise.

// Create an array that contains the words in the sentence
var sentenceBio = [`if`, `fish`, `die`, `in`, `water`, `does`, `that`, `mean`, `they`, `drown;`, `also`, `one`, `day`, `there`, `was`, `a`, `pig`, `that`, `married`, `an`,`elephant.`];

// The overlyExcited function should accept the array as the sole argument
function overlyExcited (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words. Use a conditional to add an exclamation point after every third word.
     */
    sentence = ``;
    for(i = 0; i < theWordArray.length; i++){
      if(((i+1)%3) == 0 && i > 0){
        sentence = `${sentence}  ${theWordArray[i]}!`;
      console.log(sentence);
      } else {
      sentence = `${sentence}  ${theWordArray[i]}`;
      console.log(sentence);
      }
    }
}

// Invoke the function and pass in the array
overlyExcited(sentenceBio);



// Result


// I! 
// I! spent 
// I! spent my 
// I! spent my caterpillar! 
// I! spent my caterpillar! days 
// I! spent my caterpillar! days in
// I! spent my caterpillar! days in marketing,!
// I! spent my caterpillar! days in marketing,! my
// I! spent my caterpillar! days in marketing,! my cocoon
// I! spent my caterpillar! days in marketing,! my cocoon days!
// I! spent my caterpillar! days in marketing,! my cocoon days! at
// I! spent my caterpillar! days in marketing,! my cocoon days! at Nashville
// I! spent my caterpillar! days in marketing,! my cocoon days! at Nashville Software!
// I! spent my caterpillar! days in marketing,! my cocoon days! at Nashville Software! School, 
// I! spent my caterpillar! days in marketing,! my cocoon days! at Nashville Software! School, and
// I! spent my caterpillar! days in marketing,! my cocoon days! at Nashville Software! School, and my!
// ...
    
// Bonus Instructions
// Add logic in the overlyExcited function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.


// I! 
// I! spent 
// I! spent my 
// I! spent my caterpillar!! 
// I! spent my caterpillar!! days 
// I! spent my caterpillar!! days in
// I! spent my caterpillar!! days in marketing,!!!
// I! spent my caterpillar!! days in marketing,!!! my
// I! spent my caterpillar!! days in marketing,!!! my cocoon
// I! spent my caterpillar!! days in marketing,!!! my cocoon days!!!!
// I! spent my caterpillar!! days in marketing,!!! my cocoon days!!!! at
// I! spent my caterpillar!! days in marketing,!!! my cocoon days!!!! at Nashville
// I! spent my caterpillar!! days in marketing,!!! my cocoon days!!!! at Nashville Software!!!!!
// I! spent my caterpillar!! days in marketing,!!! my cocoon days!!!! at Nashville Software!!!!! School, 
// I! spent my caterpillar!! days in marketing,!!! my cocoon days!!!! at Nashville Software!!!!! School, and
// ...