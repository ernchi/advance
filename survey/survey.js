// Generates the questions
function genQuestionHtml(question, num){
	var str = "<div class=\"response-btn\">\r\n"
	str = str.concat("  <div class=\"questions\">\r\n");
	str = str.concat("    <div class=\"col-1\"></div>\r\n");
	str = str.concat("    <div class=\"col-6\">Q" + num + ". " + question + "</div>\r\n");
	for (var i = 1; i <= 4; i++) {
		var name = "btn" + i + num;
		str = str.concat("    <div class=\"col-1\"><input type=\"radio\" id=\"" + name);
		str = str.concat("\" name=\"Q" + num + "\"><label for=\"" + name + "\">" + i + "</label></div>\r\n");
	}
	str = str.concat("    <div class=\"col-1\"></div>\r\n");
	str = str.concat("  </div>\r\n");
	str = str.concat("</div>\r\n");
	//alert(str);
	return str;
}

// Generates options bar
function genOptions(options){
	var str = "    <div class=\"col-1\"><p>";
	str = str.concat(options);
	str = str.concat("</p></div>");
	return str;
}

$( document ).ready(function() {
	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){

    });

	options = ["Not at all", "Several days", "More than half the days", "Nearly every day"];
	$(".options").append("<div class=\"col-7\"></div>");
	for(var i = 0; i < options.length; i++){
		$(".options").append(genOptions(options[i]));
	}
	$(".options").append("<div class=\"col-1\"></div>");

	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){});
});

//https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
$( document ).ready(function() {
	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){

    });

	questions = ["What's your favorite color",
	"On a scale of 1 to 4, rate how depressed you are. If you are very depressed and want to kill yourself, pick 1. If your level of depression is higher than that, then pick a higher number.",
	"This question is cool.",
	"How are you?"];
	for(var i = 1; i <= questions.length; i++){
		$(".questions").append(genQuestionHtml(questions[i-1],i));
	}


	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){});
});
