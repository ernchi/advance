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

    $(".card-title-" + i).append(genHeader(articleHeader[randomNum], articleLink[randomNum]));
    $(".card-text-" + i).append(articleDescription[randomNum]);
  }
});

jsonobj = {
	"article": [
		{
			"id": 1,
			"header": "A Personal Plan for Managing Stress",
			"description": "Learn about stress, triggers, stress management, and fill out your own worksheet to create a personal stress and self care management plan.",
      "img": "",
      "link": "https://www.aap.org/en-us/professional-resources/Reaching-Teens/Documents/Private/Personal_plan_handout.pdf"
		},
		{
			"id": 2,
			"header": "All About Problem Solving",
			"description": "Problems suck. Find out more about problem solving strategies, and get some tips on what to do if a problem really can’t be fixed.",
      "img": "",
      "link": "https://au.reachout.com/articles/a-step-by-step-guide-to-problem-solving"
		},
    {
			"id": 3,
			"header": "Balancing Work and School",
			"description": "Learn how to balance work and school life by prioritizing and using self care.",
      "img": "",
      "link": "http://www.mentalhealthamerica.net/balancing-work-and-school"
		},
    {
			"id": 4,
			"header": "Girls Health",
			"description": "For girls: Learn about health and well-being, relationships (including family), bullying, illness, and disabilities.",
      "img": "",
      "link": "http://girlshealth.gov/"
		},
    {
			"id": 5,
			"header": "The Help Guide: Friendships",
			"description": "Learn about the benefit of friendship, making new friends, strengthening current friendships, and being more social.",
      "img": "",
      "link": "https://www.helpguide.org/articles/relationships-communication/making-good-friends.htm"
		},
    {
			"id": 6,
			"header": "Love is Respect",
			"description": "Learn how to prevent and end abusive relationships through support and resources.",
      "img": "",
      "link": "https://www.loveisrespect.org/"
		}
  ]
}
