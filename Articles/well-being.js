/*Generates the header and linkes to the articles*/
function genHeader(header, link) {
  var str = "<a href=\"";
  str = str.concat(link);
  str = str.concat("\" target=\"_blank\">");
  str = str.concat(header);
  str = str.concat("</a>");
  return str;
}

/*Generates the description for the articles*/
function genDescription(description) {
  var str = description;
  return str;
}

/*Generates the images for the articles*/
function genImage(img) {
  var str = "<div class=\"card-h-100\">";
  str = str.concat("<a href=\"#\">");
  str = str.concat("<img class=\"card-img-top\" src=\"");
  str = str.concat(img);
  str = str.concat("\"></a>");
  return str;
}

$(document).ready(function() {
  var numberOfArticles = 0; // number of articles
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
    numberOfArticles++;
  }

  /*Generates all the articles randomly*/
  var numArray = []; // stores all the random numbers used
  var randomNum = 0;
  var bool = 0; // false

  for (var i = 1; i <= 6; i++) {
    // generate random number
    randomNum = Math.floor(Math.random() * (+numberOfArticles - +0)) + +0;
    // if the number has been used already, generate a new number
    while (i > 1 && numArray.indexOf(randomNum) != -1) {
      randomNum = Math.floor(Math.random() * (+numberOfArticles - +0)) + +0;
    }
    // keep track of which numbers have been used
    numArray.push(randomNum);

    $(".card-" + i).append(genImage(articleImg[randomNum]));
    $(".card-title-" + i).append(genHeader(articleHeader[randomNum], articleLink[randomNum]));
    $(".card-text-" + i).append(articleDescription[randomNum]);
  }
});

jsonobj = {
	"article": [
		{
			"id": 1,
			"header": "99 Coping Skills",
			"description": "Provides an interactive list and print-out of 99 coping skills and strategies.",
      "img": "../Articles/img/99copingskills.jpg",
      "link": "http://www.yourlifeyourvoice.org/pages/tip-99-coping-skills.aspx"
		},
		{
			"id": 2,
			"header": "Calm",
			"description": "This website provides some meditation techniques that are helpful for calmness, anxiety, sleep, etc",
      "img": "../Articles/img/calm.jpg",
      "link": "https://www.calm.com/"
		},
    {
			"id": 3,
			"header": "DailyGood.org",
			"description": "Perhaps you’re stressed out by all the depressing news you’re hearing? Get a dose of happiness at Daily Good, which only posts uplifting, inspiring news.",
      "img": "../Articles/img/dailygood.jpg",
      "link": "http://www.dailygood.org/"
		},
    {
			"id": 4,
			"header": "Allolo",
			"description": "Website that offers various sounds to help calm and relax anyone who needs it.",
      "img": "../Articles/img/allolo.jpg",
      "link": "http://www.allolo.ru/?id=5"
		},
    {
			"id": 5,
			"header": "National Health Services Directory",
			"description": "You can go to a doctor for any physical or mental health issues. A doctor (GP) can diagnose health problems, as well as recognise symptoms of mental health difficulties you might be experiencing. They can refer you to see a specialist if you need one.",
      "img": "../Articles/img/nhs.jpg",
      "link": "https://about.healthdirect.gov.au/nhsd"
		},
    {
			"id": 6,
			"header": "Grounding: Create Personal Calm",
			"description": "Learn about and put into practice the use of grounding techniques during a heated moment.",
      "img": "../Articles/img/grounding.jpg",
      "link": "https://www.winona.edu/resilience/Media/Grounding-Worksheet.pdf"
		}
  ]
}
