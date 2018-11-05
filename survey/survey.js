//https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
$( document ).ready(function() {
	$( "input" ).click(function( event ) {
		alert( "You have selected a response." );
	});
	$.get("https://codeforces.com/api/contest.ratingChanges?contestId=1074", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
