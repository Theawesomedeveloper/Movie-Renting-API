("use strict");

// rent = {
//   title: title,
//   users: []
// }


//   MOVIE LIBRARY CLASS
class Library {
  static movies = [];
  static rents = [];
  static users =[];

  static viewMovies(){
    this.movies.forEach(movie => {
      console.table(movie)
    });
  }

  static viewRents(){
    this.rents.forEach(rent => {
      console.table(rent)
    });
  }

  static viewUsers(){
    this.users.forEach(user => {
      console.table(user)
    });
  }
}


/*======================  USER PROFILE CLASS ================*/
class Profile {
  constructor (name){
    this.name = name;
    this.credit = 20;
    this.rentHistory = [];
    this.playlist = [];

    // Add user to our Library
    Library.users.push(this)
  }

  // profile methods

  // UPDATE USERNAME
  updateUsername (newUsername){
    this.name = newUsername;
    return `Sucessfully updated username to ${newUsername}`
  }

  // VIEW PROFILE
  viewProfile(){
    console.table(this)
    return `[DONE]`
  }

  // ADD CREDIT
  addCredit(credit){
    this.credit+=credit;
  }

  viewPlaylist(){
    console.table(this.playlist)
  }

  play(movie_title){
    if(this.playlist.includes(movie_title))
    return `${movie_title} has started playing...`;
  }

}


/*==================== MOVIE CLASS ====================*/
class Movie {
  constructor(title,genre,copies,price){
    this.title = title;
    this.genre = genre;
    this.available_copies = copies;
    this.price = price

    // Adding the created movie to our Library
    Library.movies.push(this);
 }

  // Wanna rent a movie
  rent(username){

    // get user credits
    const userCredits = Library.users.find( user => user.name == username).credit
    
    if(this.available_copies > 0 && Library.users.some(user => user.name == username) && userCredits >= this.price){
      
      Library.users.find(user => user.name == username).playlist.push(this.title);
      Library.users.find(user => user.name == username).rentHistory.push({
        movie_title: this.title,
        price: this.price
      });

      // deduct the price of the movie from user credits
      Library.users.find( user => user.name == username).credit -= this.price;
      this.available_copies--;

      // add rented movie to our library's 
      Library.rents.push({
        movie_title: this.title,
        user: username,
        returned: false
      });
      return `${this.title} has been successfully added to your Playlist`
    }
    else {
      return "The requested movie is not available \n Please check back later"
    } 
  }

  return(username){
    this.available_copies++;
    // Get index of movie
    const index = Library.users.find( user => user.name == username).playlist.indexOf(this.title)

    // using that index to remove the movie from users playlist
    Library.users.find( user => user.name == username).playlist.splice(index,index+1);
    
    // remove user from our library rents
   Library.rents.find(rent => rent.user == username && rent.movie_title == this.title && returned == false)
   .returned = true;
   
   // message
    return `You have successfully returned ${this.title}`
  }
 
}


const ironMan = new Movie("iron man","sci fi", 60,4);
const flash = new Movie('flash','sci-fi',30,4.7)
const jonathan = new Profile("jonathan",20);
const bright = new Profile("bright",40);

// ironMan.rent("jonathan")

// console.log(ironMan);
// console.log(ironMan.rent());
// console.log(ironMan);

// console.log(ironMan.return());

// console.log(Library);




// const a =[4,6,7]
// console.log(a);
// a.splice(0,1)
// console.log(a);


