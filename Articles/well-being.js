// Generates the header for the Articles
function genHeader(header) {
  var str = "<a href=\"#\">";
  str = str.concat(header);
  str = str.concat("</a>");
  return str;
}

$(document).ready(function() {
  articles = jsonobj["article"];

  /*
   *storing the info of each article from the json object
   */
  /*the arrays that will store the information of each article*/
  articleID = [];
  articleHeader = [];
  articleDescription = [];
  articleImg = [];
  articleLink = [];

  /*loops through the json object and stores the data*/
  for (var article of articles) {
    articleID.push(article["id"]);
    articleHeader.push(article["header"]);
    articleDescription.push(article["description"]);
    articleImg.push(article["img"]);
    articleLink.push(article["link"]);
  }

  $(".card-title").append(genHeader(articleHeader[0]));
});

jsonobj = {
	"article": [
		{
			"id": 1,
			"header": "99 Coping Skills",
			"description": "Provides an interactive list and print-out of 99 coping skills and strategies.",
      "img": "",
      "link": "http://www.yourlifeyourvoice.org/pages/tip-99-coping-skills.aspx"
		},
		{
			"id": 2,
			"header": "Calm",
			"description": "This website provides some meditation techniques that are helpful for calmness, anxiety, sleep, etc",
      "img": "",
      "link": "https://www.calm.com/"
		},
    {
			"id": 3,
			"header": "DailyGood.org",
			"description": "Perhaps you’re stressed out by all the depressing news you’re hearing? Get a dose of happiness at Daily Good, which only posts uplifting, inspiring news.",
      "img": "",
      "link": "http://www.dailygood.org/"
		},
    {
			"id": 4,
			"header": "Allolo",
			"description": "Website that offers various sounds to help calm and relax anyone who needs it.",
      "img": "",
      "link": "http://www.allolo.ru/?id=5"
		},
    {
			"id": 5,
			"header": "National Health Services Directory",
			"description": "You can go to a doctor for any physical or mental health issues. A doctor (GP) can diagnose health problems, as well as recognise symptoms of mental health difficulties you might be experiencing. They can refer you to see a specialist if you need one.",
      "img": "",
      "link": "https://about.healthdirect.gov.au/nhsd"
		},
    {
			"id": 6,
			"header": "Grounding: Create Personal Calm",
			"description": "Learn about and put into practice the use of grounding techniques during a heated moment.",
      "img": "",
      "link": "https://www.winona.edu/resilience/Media/Grounding-Worksheet.pdf"
		}
  ]
}
