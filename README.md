
# MOVIE API

Vanilla Js doing what it does best.
This is a Vanilla Js Movie Api based of Classes.


## Table of contents
- [Run Locally](#run-locally)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Profile Class](#profile-class)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Run the code

```bash
node movieapp.js
```


## API Reference

## **Library Class**

To interact with this class we use it's class name **Library** because all methods
of this class are static 

#### Usage/Examples

```javascript

// Acessing methods of this class
Library.prototype.method

// Accessing properties of this class
Library.prototype.property
```
In this **Library** Class for simplicity there are only 3 properties and methods

However, You can query these properties using its bild in methods

 ### 1.  View Movies
 This takes 0 arguments and returns all available movies in our **Movie** class

#### Usage
```javascript
Library.viewMovies()
```

### 2.  View Rents
 This takes 0 arguments as well and returns the rent infomation of each movie object

#### Usage
```javascript
Library.viewRents()
```

### 3.  View Users
 This takes 0 arguments as well and returns the rent infomation of each user created by the **User** Class

#### Usage
```javascript
Library.viewUsers()
```

## **Profile Class**
The Profile class is the basic building block for each
any user in our System.

It uses a contructor function to create user profiles

```javascript
const jonathan = new Profile(name)
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your name in lower case|

when an object is instantiated from the profile class it inherits
all methods and properties of the Profile class

## Query Syntax
```javascript
Object.prototype.method()
```

#### The following queries methods are available for each Profile Instance

### 1. Update Username
This updates the Username of any Instance
#### Usage
```javascript
// Creating an instance
const jonathan = new Profile('jonathan');

jonathan.updateUsername(newName)
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `newName`      | `string` | **Required**. New name  |

### 2. play
This takes a movie title as an argument 
and Plays plays the requested movie
#### Usage
```javascript
jonathan.play(movie_title)
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movie_title`      | `string` | **Required**. Movie tile you want to play |

### 3. View Playlist
This takes no argument and returns all rented movies
#### Usage
```javascript
jonathan.viewPlaylist(newName)
```

### 4. View Profile
This takes no argument and returns a users profile information
#### Usage
```javascript
jonathan.viewProfile()
```
### 5. Add Credit
This takes an argument credit and adds it to a users credit

#### Note: renting a movie will cost you some credits
#### Usage
```javascript
jonathan.addCredits(credit)
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `credit`      | `int` | **Required**. credit amount|


## **Movie Class**

The Movie Class is used Perform a very Important rolle
as it forms the basic building block of our app

The movie uses a constructor to create and add new movies to 
our Library Class 

The movie constructor takes 4 arguments as seen below

### Syntax

```javascript
const <movie name> = new Movie(title,genre,copies,price)
```
| Parameter | Type    | Description   |
|:--------- |---------| :-------------|
|`title`    | `String`| **Required**. title of the movie |
|`genre`|`String`| **Required**. the genre of the movie|
|`copies`| `Int`|**Required**. No. of copies you want to create of the movie |
|`price`|`Int`| **Required**. Unit price for renting of the movie|

With great power comes great responsibility, and our Movie
Class isn't an exception to this saying although it has Just 2 methods
With this let's jump into the available methods

### Query Syntax
```javascript
Object.prototype.method()
```
The following queries are available on the Profile instances

### 1. Rent a Movie
With this Api renting a movie isn't that complicated
as we've done all the strenous work for you

This method accepts 1 argument; the movie name .
The method is called on the movie instance you want
the operations to take place on
#### Syntax
```javascript
Object.prototype.rent(username)
```
| Parameter | Type | Description |
|:----------|:-----|:------------|
|`username`   | `String`| **Required**. your username|

#### Usage
```javascript
// Here jonathan is the Profile instance we created earlier
flash.rent('jonathan')
```
### 1. Returning a Movie 
Returning a Movie shouldn't be stressfull and that's exactly 
what happens with our Api
you can easily return rented movies
#### Syntax
```javascript
Object.prototype.return(username)
// where Object.prototype is the movie we want to rent
```
| Parameter | Type | Description |
|:----------|:-----|:------------|
|`username`   | `String`| **Required**. your username|

#### Usage
```javascript
flash.return('jonathan')
```


