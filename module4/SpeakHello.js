//IIFE!!!
(function (window) {


    //very interesting. Use const when a variable will not be reassigned
    const helloSpeaker = {};
    //attach to the fake namespce object we made
    let speakWord = "Hello";
    helloSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    }




    //expose to the global object, creates new window property
    window.helloSpeaker = helloSpeaker;
//adding () will make this whole file execute the moment it loads. Cool!!!
})(window);