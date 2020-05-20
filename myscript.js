(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  var hellospeaker = {};

  hellospeaker.speakWord = "Hello";

  hellospeaker.speak = function (name) {
    console.log(hellospeaker.speakWord + " " + name);
  };
  const byespeaker = {};
  byespeaker.speakWord = "Good Bye";

  byespeaker.speak = function (name) {
    console.log(byespeaker.speakWord + " " + name);
  };
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byespeaker.speak(names[i]);
    } else {
      hellospeaker.speak(names[i]);
    }
  }
})();
