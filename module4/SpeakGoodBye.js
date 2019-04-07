//IIFE!!!
(function (window) {

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
  const byeSpeaker = {};
// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  let speakWord = "Good Bye";
  //we made only the usage of this function exposed to the outside i.e. window
  byeSpeaker.speak = function speak(name) {
    //in effect, this speakword is not exposed to the outside world
    console.log(speakWord + " " + name);
  }


  //creates a new property on the window object
  //and set it to our byeSpeaker object
  window.byeSpeaker = byeSpeaker;


//adding this executes the function!!!
})(window);