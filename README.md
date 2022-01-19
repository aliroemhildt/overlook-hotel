# OVERLOOK HOTEL

## Abstract 
This application was built as the final solo project for Module 2 of [Turing School of Software & Design's](https://turing.edu/) frontend program. This app is a hotel management tool for customers to create new bookings and view those bookings and their total bill.

The focus areas of this project were:
- Using OOP to drive code design
- Unit testing / TDD 
- Using the fetch API to retrieve and post data
- Error handling
- Sass

## Table of Contents
- [Project Overview](#project-overview)
- [Future Features](#future-features)
- [Tech Stack](#technologies-used)
- [Install Instructions](#instructions)
- [Authors/Links](#authors)

## Project Overview
The application opens to a login page where a customer can enter their credentials. If a user enters the correct credentials, they will enter the app. If their username or password is incorrect, an error message will appear to inform the user to try agian. 

Credentials:
- username: "customer<id>" where id is a number 1-50 (ex: "customer25")
- password: "overlook2021"
  
![Login page]()

After logging in, a user is brought to the "My Dashboard" page. Here, they will see their total bill for all bookings (past and future), as well as a list of all of their bookings sorted by date (past and future).
  
![My Dashboard page]()
  
If a user clicks the "Book Now" button in the upper right-hand corner, they will be brought to the "Create Booking" page. Here, they will see a list of all available rooms for the current date. On the left side of the page, the user can use the filters to view all available rooms by room type (optional) and date (required, the default is the current date). After clicking the "find room" button, the list of availble rooms will be updated to match the filter criteria.
  
If the user manually enters a past date, an error message will appear asking them to select a current or future date. If there are no available rooms that match the filter criteria, a message will appear in the available rooms section that informs the user that no rooms are available that meets their filter criteria and asks them to enter a different date or room type. 
  
[Create Booking page]()
  
To book a room, the user can click the "Book Room" button on the room card. That room will be added to their list of bookings for the selected date. After booking, the card for that room will show a successful message and then dissappear from the list. 
  
[Book a room]()
  
The user can click the "My Dashboard" button to return back to the "My Dashboard" page. Any bookings made on the "Book Now" page will now appear in their list of bookings, and the total bill will be updated. 
  
[Return to My Dashboard page]()
  
## Future Features
- 'Create Account' page where a new user can be created (with username and password)
- The ability to log in and out of different accounts
- A specific login for the hotel manager. Once logged in they would have the ability to view all customers, bookings, and rooms. They would have the ability to add or remove bookings for customers. 
- The ability to cancel a future booking (by customer or manager)
- The ability to filter the list of bookings on "My Dashboard"

## Technologies Used 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white)
![Chai](https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Instructions
clone this repo to your local machine:
- copy the SSH address
- run ```git clone [remote-address]``` in your terminal

clone the [overlook api repo](https://github.com/turingschool-examples/overlook-api) to set up the local server:
- follow this link to the api repo
- copy the SSH address
- run ```git clone [remote-address]``` in your terminal

from inside your local copy of the api repo:
- run ```npm install``` in your terminal
- run ```npm start``` in your terminal

from inside your local copy of the project repo: 
- run ```npm install``` in a separate terminal tab
- run ```npm start``` in the terminal
- copy the url for the localhost 8080 
- paste the url in your browser
- you should now see the Overlook Hotel login page!

## Links
- [Starter repo](https://github.com/turingschool-examples/webpack-starter-kit) by [Turing School of Software & Design](https://turing.edu/)
- [Local Server repo](https://github.com/turingschool-examples/overlook-api) by [Turing School of Software & Design](https://turing.edu/)
- [Project spec](https://frontend.turing.edu/projects/overlook.html) by [Turing School of Software & Design](https://turing.edu/)

## Authors
Functionality and design by [Ali Roemhildt](https://github.com/aliroemhildt)
