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


//https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
$( document ).ready(function() {
	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){
      
    });

	questions = ["What's your favorite color",
	"On a scale of 1 to 4, rate how depressed you are. If you are very depressed and want to kill yourself, pick 1. If your level of depression is higher than that, then pick a higher number.",
	"This question is cool.",
	"How are you?"];
	$(".questions").append("HIIIIIIIIIIIIII");
	for(var i = 1; i <= questions.length; i++){
		$(".questions").append(genQuestionHtml(questions[i-1],i));
	}


	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){});
});
