$("#main").append("Chris Meese");

var formattedName = HTMLheaderName.replace("%data%", "Chris Meese");
var role = "Web Devoo";
var formattedRole = HTMLheaderRole.replace("%data%", "Devooo");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);