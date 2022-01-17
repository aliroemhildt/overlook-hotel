import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import {
  fetchCustomers,
  fetchRooms,
  fetchBookings,
  fetchSingleCustomer,
  postBooking
} from './apiCalls'
import {
  domUpdates,
  qs
} from './domUpdates';

let hotel;

const fetchData = (customer) => {
  return Promise.all([fetchCustomers(), fetchRooms(), fetchBookings()])
  .then(data => {
    setHotel(data);
    setCurrentCustomer(customer);
    domUpdates.hideLoginPage();
    domUpdates.populateTotalBill();
    domUpdates.displayCustomerDashboard();
  })
  .catch(error => console.log(error)) //this will need a domUpdate fn
}

const setHotel = (data) => {
  hotel = new Hotel(data[0].customers, data[1].rooms, data[2].bookings);
}

const setCurrentCustomer = (customer) => {
  hotel.currentCustomer = customer;
  hotel.currentCustomer.getAllBookings(hotel.bookings);
}

const validateLogin = (username, password) => {
  let customer;
  const id = parseInt(getID(username.slice(8,10)));
  if ((username.length === 10) && (username.slice(0, 8) === 'customer') && (password === 'overlook2021') && (0 < id && id < 51)) {
    fetchSingleCustomer(id)
      .then(data => {
        customer = new Customer(data);
        fetchData(customer)
      });
  } else {
    console.log('username or password is incorrect');
  }
}

const getID = (num) => {
  if (num.slice(0,1) === '0') {
    return num.slice(1);
  } else {
    return num;
  }
}

const updateBookings = (data) => {
  hotel.bookings = data.bookings.map(booking => new Booking(booking));
  hotel.currentCustomer.getAllBookings(hotel.bookings);
}

export {validateLogin, hotel, updateBookings}













// test fetch requests
// const p1 = document.querySelector('.p-1-js');
// const p2 = document.querySelector('.p-2-js');
// const postButton = document.querySelector('.post-js');
// const lengthCustomers = document.querySelector('.length-js');
//
// fetchCustomers()
//   .then(data => {
//     p1.innerText += ` ${data.customers[0].name}`;
//   });
//
// fetchSingleCustomer(10)
//   .then(data => {
//     p2.innerText += ` ${data.name}`;
//   });
//
// const showLengthBookingsAPI = () => {
//   fetchBookings()
//     .then(data => {
//       console.log(data.bookings);
//       lengthCustomers.innerText = `Number of bookings: ${data.bookings.length}`;
//     })
// }
//
// showLengthBookingsAPI();
//
// const postData = () => {
//   postBooking({
//   userID: 1,
//   date: '2022/11/20',
//   roomNumber: 15,
//   })
//     .then(data => {
//       console.log(data.newBooking)
//       showLengthBookingsAPI()
//     })
//   }
//
//
// postButton.addEventListener('click', postData);

// to delete:
// fetch('http://localhost:3001/api/v1/bookings/<id>', {method: "DELETE"})
