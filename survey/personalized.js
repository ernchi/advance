$(document).ready(function() {
  /* Retrieve the user response from the cache */
  var surveyResp = localStorage.getItem('surveyResp');
  surveyResp = JSON.parse(surveyResp);
  surveyResp = {
    survey: [surveyResp]
  };

  /* Send the user response to the server */
  $.ajax({
    url: "https://surveyserverc4c.herokuapp.com/suggestions",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(surveyResp),
    contentType: "application/json; charset=utf-8",
    cache: true,
    success: function(data) {
      console.log(data);
      applyData(data);
    },
    error: function(error) {
      console.log("Error:");
      console.log(error);
    }
  })
});

var applyData = function(data) {
  // getting to
  data[0].suggestionlink;
}

/* Returned suggestions object */
[
  {
    categoryid: 0,
    id: 1,
    suggestionlink: "text",
    suggestiontext: "text",
  }
]
