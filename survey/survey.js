// Generates the questions
function genQuestionHtml(question, num){
	var str = "<div class=\"response-btn\">\r\n"
	str = str.concat("  <div class=\"col-1\"></div>\r\n");
	str = str.concat("  <div class=\"col-6\">Q" + num + ". " + question + "</div>\r\n");
	for (var i = 1; i <= 4; i++) {
		var name = "btn" + i + num;
		str = str.concat("  <div class=\"col-1\"><input type=\"radio\" id=\"" + name);
		str = str.concat("\" name=\"Q" + num + "\"><label for=\"" + name + "\">" + i + "</label></div>\r\n");
	}
	str = str.concat("  <div class=\"col-1\"></div>\r\n");
	str = str.concat("</div>\r\n");
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
$(document).ready(function() {	
	survey = jsonobj["survey"];
	var curQuestionNum = 1;
	for (var questionGroup of survey){
		questions = [];
		options = [];
		for(var option of questionGroup["options"]){
			options.push(option["texts"])
		}
		for(var question of questionGroup["questions"]){
			questions.push(question["QuestionName"]);
		}
		for(var i = 0; i < questions.length; i++){
			$(".questions").append(genQuestionHtml(questions[i], curQuestionNum));
			curQuestionNum += 1;
		}
	}
});

jsonobj = {
	"survey": [
	{
		"options": [
		{
			"option_id": 1,
			"texts": "Not at all",
			"weights": 1
		},
		{
			"option_id": 1,
			"texts": "Several days ",
			"weights": 3
		},
		{
			"option_id": 1,
			"texts": "More than half the days",
			"weights": 4
		},
		{
			"option_id": 1,
			"texts": "Nearly every day",
			"weights": 5
		}
		],
		"questions": [
		{
			"id": 1,
			"category": 3,
			"QuestionWeight": 4,
			"QuestionName": "Little interest or pleasure in doing things",
			"response": -1
		},
		{
			"id": 2,
			"category": 3,
			"QuestionWeight": 2,
			"QuestionName": "Feeling down, depressed, or hopeless"
		},
		{
			"id": 3,
			"category": 1,
			"QuestionWeight": 1,
			"QuestionName": "Trouble falling or staying asleep, or sleeping too much ",
			"response": -1
		},
		{
			"id": 4,
			"category": 5,
			"QuestionWeight": 9,
			"QuestionName": "Feeling tired or having little energy",
			"response": -1
		},
		{
			"id": 5,
			"category": 2,
			"QuestionWeight": 4,
			"QuestionName": "Poor appetite or overeating ",
			"response": -1
		},
		{
			"id": 6,
			"category": 3,
			"QuestionWeight": 7,
			"QuestionName": "Feeling bad about yourself — or that you are a failure or have let yourself or your family down ",
			"response": -1
		},
		{
			"id": 7,
			"category": 5,
			"QuestionWeight": 3,
			"QuestionName": "Trouble concentrating on things, such as reading the newspaper or watching television",
			"response": -1
		},
		{
			"id": 8,
			"category": 1,
			"QuestionWeight": 4,
			"QuestionName": " Moving or speaking so slowly that other people could have noticed?  Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
			"response": -1
		},
		{
			"id": 9,
			"category": 2,
			"QuestionWeight": 8,
			"QuestionName": "Thoughts that you would be better off dead or of hurting yourself in some way ",
			"response": -1
		}
		]
	},
	{
		"options": [
		{
			"option_id": 1,
			"texts": "SO BAD",
			"weights": 1
		},
		{
			"option_id": 1,
			"texts": "OK",
			"weights": 3
		},
		{
			"option_id": 1,
			"texts": "GOOD",
			"weights": 4
		},
		{
			"option_id": 1,
			"texts": "GRRRREAT!",
			"weights": 5
		}
		],
		"questions": [
		{
			"id": 1000000,
			"category": 3,
			"QuestionWeight": 4,
			"QuestionName": "How you feel?",
			"response": -1
		},
		{
			"id": 1000001,
			"category": 3,
			"QuestionWeight": 2,
			"QuestionName": "How you mom feel?"
		},
		{
			"id": 1000002,
			"category": 1,
			"QuestionWeight": 1,
			"QuestionName": "How you father feel?",
			"response": -1
		}
		]
	}
	]
}
