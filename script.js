var movies = [
  {
    title: "In Bruges",
    rating: 5,
    seen: false
  },
  {
    title: "Frozen",
    rating: 4.5,
    seen: true
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    seen: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    seen: false
  }
];

// 1st attempt
// movieDB.forEach(function(el, i) {
//   if(movieDB[i].seen === true) {
//     console.log("You have watched " + movieDB[i].name + " - " + movieDB[i].rating + " stars");
//   } else {
//     console.log("You have not seen " + movieDB[i].name + " - " + movieDB[i].rating + " stars");
//   }
// })


// This is more modular
movies.forEach(function(movie) {
  console.log(buildStr(movie));
});

function buildStr(movie){
  var final = "You have ";
  if (movie.seen === true){
    final += "watched ";
  } else {
    final += "not seen ";
  };
  final += "\"" + movie.title + "\" ";
  final += "- " + movie.rating + " stars";
  return final;
}

