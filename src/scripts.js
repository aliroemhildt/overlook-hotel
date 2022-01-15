// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import {
  fetchCustomers,
  fetchRooms,
  fetchBookings,
  fetchSingleCustomer,
  postBooking
} from './apiCalls'

// test fetch requests
const p1 = document.querySelector('.p-1-js');
const p2 = document.querySelector('.p-2-js');
const postButton = document.querySelector('.post-js');
const lengthCustomers = document.querySelector('.length-js');

fetchCustomers()
  .then(data => {
    p1.innerText += ` ${data.customers[0].name}`;
  });

fetchSingleCustomer(10)
  .then(data => {
    p2.innerText += ` ${data.name}`;
  });

const showLengthBookingsAPI = () => {
  fetchBookings()
    .then(data => {
      console.log(data.bookings);
      lengthCustomers.innerText = `Number of bookings: ${data.bookings.length}`;
    })
}

showLengthBookingsAPI();

const postData = () => {
  postBooking({
  userID: 1,
  date: '2022/11/20',
  roomNumber: 15,
  })
    .then(data => showLengthBookingsAPI())
  }


postButton.addEventListener('click', postData);

// to delete:
// fetch('http://localhost:3001/api/v1/bookings/<id>', {method: "DELETE"})
