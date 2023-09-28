let movies = [
  {
    name: 'Uri-The Surgical Strike (2019)' ,
    poster: 'https://i.pinimg.com/474x/5f/9a/52/5f9a52e454582009861a21b04c4c3096.jpg',
    rating: 9,
  },
  {
    name: 'Oppenheimer (2023)',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
    rating: 7.8,
  },
  {
    name: 'Lagaan (2001)',
    poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
    rating: 8.8,
  },
  {
    name: 'Baahubali 2 (2017)' ,
    poster: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2017/03/Baahubali-2-New-Poster-Ft.-Prabhas-Rana-Others-In-Fierce-Avatar-1.jpg',
    rating: 8.9,
  },
  {
    name: 'Sholay (1975)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BNDQ3ODYyOWYtYTkwNC00ZThhLTlkMzItYWMwODFhMmJhOGFlXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
    rating: 9.5,
  },
  {
    name: 'Avengers: Endgame (2019)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
    rating: 9.2,
  },
  {
    name: 'Padmaavat (2018)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BOWZjMjkwM2QtZTJiMy00MmI5LWI2YjEtMmY5NjNiYTE2NTBiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg',
    rating: 7.0,
  },
  {
    name: 'M.S. Dhoni: The Untold Story (2016)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 8.5,
  },
  {
    name: 'RRR (2022)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 9.5,
  },
  {
    name: 'Titanic (1997)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BOTdlZGJiNDUtODUyMi00ODQyLTgwNDEtNmI5MzZlZmZlOWQ5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    rating: 8.7,
  },
  {
    name: 'The Kashmir Files (2022)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BZjI0YmMzNDctZGFkZi00NmIyLTk5NWEtMTU1MGRmMDQwNWU2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    rating: 9.2,
  },
  {
    name: 'The Dark Knight (2008) ' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
    rating: 7.8,
  },
  {
    name: 'Inception (2010)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    rating: 8.9,
  },
  {
    name: 'Avatar (2009)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg',
    rating: 7.7,
  },
  {
    name: 'Hum Apke Hain Kon (1994)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BZjc0ODAwMmItMmQwMy00MmRmLThjOGYtZGEwYjQ2ZjcyYzA3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
    rating: 6.4,
  },
  {
    name: 'Dhamal (2007)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BNGUyNTk0YmYtNjU2YS00NWQ1LTllZGQtYjk5YjU4YzYxZjY3XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg',
    rating: 8.1,
  },
  {
    name: 'Hera Pheri (2000)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 8.6,
  },
  {
    name: 'Bhaag Milkha Bhaag (2013)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_.jpg',
    rating: 8.9,
  },
  {
    name: 'Baahubali: The beginning (2015)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg',
    rating: 7.6,
  },
  {
    name: 'Mera Naam Joker (1970)',
    poster: 'https://m.media-amazon.com/images/M/MV5BODUxNjU0NDItY2FmZi00YWQzLWI4YjAtZjYyNWZhODc3ZTZhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg',
    rating: 8.0,
  },
  {
    name: 'Enthiran: The Robot (2010)' ,
    poster: 'https://i0.wp.com/bestoftheyear.in/wp-content/uploads/2017/06/Enthiran-Poster.jpg?fit=400%2C580&ssl=1',
    rating: 7.2,
  },
  {
    name: 'Kabhi Khushi Kabhie Gham… (2001)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    rating: 8.6,
  },
  {
    name: 'Ghajini (2008)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAyMzU3OTg2Nl5BMl5BanBnXkFtZTcwNzIyMjMyMg@@._V1_FMjpg_UX1000_.jpg',
    rating: 6.9,
  },
  {
    name: 'Barfi! (2012)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMjEzNDg4MTM1OV5BMl5BanBnXkFtZTgwMDg1NjE2MzI@._V1_.jpg',
    rating: 7.4,
  },
  {
    name: '3 Idiots (2009)' ,
    poster: 'https://m.media-amazon.com/images/M/MV5BMzY2MzgxNDI5MV5BMl5BanBnXkFtZTcwMzk2MzkwMw@@._V1_.jpg',
    rating: 8.1,
  },
];
// referencs
const searchBtn = document.querySelector('.search-bar button');

// console.log(searchBtn);


searchBtn.addEventListener('click', (event)=> {
  const searchInput = document.querySelector('.search-box').value;
  // console.log(searchInput, searchInput.substring(3, 10));
  // console.log('Button is working!');

  movies.filter((movie)=>{
    return 
  })
})

// reference of movies div element
const moviesElement = document.querySelector('.movies');


//* 1st way
/*
const movie = document.querySelector('.movie');

console.log(overlay);
console.log(poster);

movies.forEach(displayMovies1, false)

function displayMovies1(movie2) {
  let movie1 = movie.cloneNode(true);
  moviesElement.appendChild(movie1);
  
  let poster = movie1.lastElementChild;
  poster.removeAttribute('src');
  poster.setAttribute('src', `${movie2.poster}`);

  let overlay = movie1.firstElementChild;
  let video = overlay.firstElementChild;
  let details = overlay.lastElementChild;
  details.firstElementChild.textContent = `${movie2.name}`
  details.firstElementChild.nextElementSibling.textContent = `IMDB: ${movie2.rating}`
  // console.log(movie1);
}
*/
// 
let deleteChild = moviesElement.firstElementChild
moviesElement.removeChild(deleteChild)

//* 2nd way

movies.forEach(displayMovies2, false)

function displayMovies2(movie) {
  let movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  moviesElement.appendChild(movieElement)

  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  movieElement.appendChild(overlay);
  
  let video = document.createElement('div');
  video.classList.add('video');
  overlay.appendChild(video);

  let details = document.createElement('div');
  details.classList.add('details');
  details.innerHTML = `
    <h3>${movie.name}</h3>
    <h3>IMDB: ${movie.rating}</h3>
    <p>Director: </p>
  `;
  overlay.appendChild(details);
  

  let poster = document.createElement('img');
  poster.classList.add('poster');
  poster.setAttribute('src', `${movie.poster}`);
  movieElement.appendChild(poster);
}

// 


//* 3rd way

// function searchMovie() {
//   movies.forEach(displayMovies3, false);
// }
// searchMovie();

// function displayMovies3(movie) {
//   let movieDiv = document.createElement('div');
//   movieDiv.classList.add('movie');
//   movieDiv.innerHTML = `
//     <div class="overlay">
//       <div class="video"> 
//         <div><ion-icon name="reload-outline"></ion-icon> </div> 
//         <div> Please wait while loading! </div>
//       </div>
//       <div class="details">
//         <h3>${movie.name}</h3>
//         <h3>IMDB: ${movie.rating}</h3>
//         <p>Director: </p>
//       </div>
//     </div>
//     <img class="poster" src="${movie.poster}" alt="">
//   `;
//   moviesElement.appendChild(movieDiv);
// }

