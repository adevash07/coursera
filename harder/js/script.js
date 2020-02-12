

(function (window) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for ( var i = 0; i < names.length; i++) {
		var lowercase = names[i].toLowerCase();
		var firstLetter = lowercase.charAt();
		 if (firstLetter == "j") { 
		 	byeSpeaker.speak(names[i])
		 } else {
		 	helloSpeaker.speak(names[i])
  }
}
})(window);



  
