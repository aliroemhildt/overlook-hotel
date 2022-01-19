import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import Booking from './classes/Booking';
import {domUpdates} from './domUpdates';
import {
  fetchCustomers,
  fetchRooms,
  fetchBookings,
  fetchSingleCustomer,
} from './apiCalls'

let hotel;

const fetchData = (customer) => {
  return Promise.all([fetchCustomers(), fetchRooms(), fetchBookings()])
    .then(data => {
      setHotel(data);
      setCurrentCustomer(customer);
      domUpdates.hideLoginPage();
      domUpdates.displayCustomerDashboard();
    })
    .catch(error => domUpdates.displayFetchError(error))
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
  const id = getID(username.slice(8, 10));
  if ((username.length === 10) && (username.slice(0, 8) === 'customer') && (password === 'overlook2021') && (0 < id && id < 51)) {
    fetchSingleCustomer(id)
      .then(data => {
        customer = new Customer(data);
        fetchData(customer)
      })
      .catch(error => domUpdates.displayFetchError(error))
  } else {
    domUpdates.displayLoginUserError();
  }
}

const getID = (digits) => {
  if ((digits < 10) && (digits.slice(0, 1) === '0')) {
    return parseInt(digits.slice(1, 2));
  }  else if (digits > 9) {
    return parseInt(digits);
  }
}

const updateBookings = (data) => {
  hotel.bookings = data.map(booking => new Booking(booking));
  hotel.currentCustomer.getAllBookings(hotel.bookings);
}

export {validateLogin, hotel, updateBookings}
