// var user = {
// 	username: "andrei",
// 	password: "supersecret"
// }

var database = [
	{
		username: "andrei",
		password: "supersecret"
	},

	{
		username: "ebuka",
		password: "super"
	},
	{
		username: "alex",
		password: "sup"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var passPrompt = prompt("whats your password")
var userNameprompt = prompt("whats your username")

// function isUserValid (password, username){
// 	for (var i=0; i < database.length; i++){
// 		if (password === database[i].password && username === database[i].username){
// 			return true
// 		}
// 	}return false
// }

database.forEach(function(database){
	if (password === password && username === username){
		 			return true
		 		}
			return false
})

function logIn (password, username){
  if (isUserValid(password, username)){
	  console.log(newsfeed)
  }
  else{
    alert("incorrect password and username")
  }
}

logIn(passPrompt, userNameprompt)