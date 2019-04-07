(function () {

  let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// See Lecture 50, part 1
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toLowerCase() == "j") {
      byeSpeaker.speak(names[i].toString());
    } else {
      helloSpeaker.speak(names[i].toString());
    }
  }


})();