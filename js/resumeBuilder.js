
var bio = {
	"name" : "Felix Olsson",
	"role" : "Student",
	"age" : "27",
	"contacts" : {
		"mobile" : "0730-31 58 04",
		"email" : "felix.martin.olsson@gmail.com",
		"github" : "FelixOlsson",
		"location" : "Lund"
	},
	"bioPic" : "images/profilbild.png",
	"welcome message" : "Welcome",
	"skills" : ["Java", "C++", "C#", "Sql", "Javascript", "LaTeX"], 
	"display" : function() {

		
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formatedGithub);

		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

		$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
				
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			bio.skills.forEach(function(skill) {
				$("#skills").append(HTMLskills.replace("%data%",skill));
			}); 
		}
	}
};

bio.display();


var education = {
	"schools" : [
	{
		"name" : "Faculty of Engineering",
		"location" : "Lund University",
		"major" : ["master in computer science"],
		"dates" : 2012,
		"degree" : ["Samhäll"],
		"url" : " "
	},
	{
		"name" : "Heleneholm",
		"location" : "Malmö",
		"degree" : ["Samhäll"],
		"dates" : 2008,
		"url" : " "
	}]
,
	"onlineCourses" : [
	{
		"title" : "JavaScript Syntax",
		"School" : "Udacity",
		"dates" : 2017,
		"url" : " "
	}
  ],
  "display" : function() {
	  if(education.schools.length > 0) {

		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
		
			var formattedName = HTMLschoolName.replace
			("%data%", school.name);
			$(".education-entry:last").append(formattedName);		

			var formattedDegree = HTMLschoolDegree.replace
			("%data%", school.degree);
			$(".education-entry:last").append(formattedDegree);		

			var formattedDates = HTMLschoolDates.replace
			("%data%", school.dates);
			$(".education-entry:last").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace
			("%data%", school.location);
			$(".education-entry:last").append(formattedLocation);

			if (typeof school.major != 'undefined') {
				var formattedMajor = HTMLschoolMajor.replace
				("%data%", school.major);
				$(".education-entry:last").append(formattedMajor);
			}		
		});
	  }
	}
 };

education.display();

var work = {
	"jobs" : [
	{
		"employer" : "tidningsbärarna",
		"title" : "tidningsbud",
		"location" : "Lund",
		"dates" : "2009-01-03 2010-01-03",
		"description" : "delade ut tidningar"
	},
	{
		"employer" : "tidningsbärarna",
		"title" : "tidningsbud",
		"location" : "Lund",
		"dates" : "2009-01-03 2010-01-03",
		"description" : "delade ut tidningar"
	}
  ],
  "display" : function() {
		if(work.jobs.length > 0) {		
			work.jobs.forEach(function(job) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace
				("%data%", job.employer);
				var formattedTitle = HTMLworkTitle.replace
				("%data%", job.title);

				var formattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(formattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace
				("%data%", job.dates);
				$(".work-entry:last").append(formattedDates);

				var formattedDescription = HTMLworkDescription.replace
				("%data%", job.description);
				$(".work-entry:last").append(formattedDescription);
			});
		}
	} 
};

work.display();

var projects = {
	"projects" : [
	{
		"title" : "android app",
		"dates" : 2017,
		"description" : "small game",
		"images" : [],
		"video" : "videos/gameplayMobileGame.mp4",
		"repo" : "url"
	},
	{
		"title" : "android app",
		"dates" : 2017,
		"description" : "small game",
		"images" : [],
		"video" : "videos/gameplayMobileGame.mp4",
		"repo" : "url"
	},
	{
		"title" : "android app",
		"dates" : 2017,
		"description" : "small game",
		"images" : [],
		"video" : "videos/gameplayMobileGame.mp4",
		"repo" : "url"
	}
  ],
  "display" : function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
		("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate= HTMLprojectDates.replace
		("%data%", project.dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace
		("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);

		project.images.forEach(function(image) {
			var formattedImages = HTMLprojectImage.replace
			("%data%", image);
			$(".project-entry:last").append(formattedImages);
		});

		var formattedVideo = HTMLprojectVideo.replace
		("%data%", project.video);
		$(".project-entry:last").append(formattedVideo);		
	});
 }
};

projects.display();


var intoduction = "This is my first attempt at making a website, which is supposed to present my Curriculum vitae in a pleasant and fun way. \n\n" +
"The skeleton is from the course JavaScript basics from Udacity. \n <br>"+
"The site is not finished, but will hopefully be completed 2017-03-05";



var formattedIntroduction = HTMLprojectDescription.replace
("%data%", intoduction);
$("#personal").append(formattedIntroduction);

$(document).click(function(loc) {
 var x = loc.pageX;
 var y = loc.pageY;

 logClicks(x, y);
});





// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
