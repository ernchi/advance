function genQuestion(question,num){
	process.stdout.write("<div class=\"btn-group\">\r\n");
	process.stdout.write("  <div class=\"questions\">\r\n");
	process.stdout.write("    <div class=\"col-1\"></div>\r\n");
	process.stdout.write("    <div class=\"col-6\">Q" + num + " " + question + "</div>\r\n");
	for (var i = 1; i <= 4; i++) {
			var name = "btn" + i + num;
    		process.stdout.write("    <div class=\"col-1\"><input type=\"radio\" id=\"" + name);
    		process.stdout.write("\" name=\"Q" + num + "\"><label for=\"" + name + "\">" + i + "</label></div>\r\n");
	}
	process.stdout.write("    <div class=\"col-1\"></div>\r\n");
	process.stdout.write("  </div>\r\n");
	process.stdout.write("</div>\r\n");
}

questions = ["What's your favorite color",
			"On a scale of 1 to 4, rate how depressed you are. If you are very depressed and want to kill yourself, pick 1. If your level of depression is higher than that, then pick a higher number.",
			"This question is great.",
			"How are you?"];
for(var i=1; i<=questions.length; i++){
	genQuestion(questions[i-1],i);
}
