import {validateLogin, hotel, updateBookings} from './scripts';
import {fetchBookings} from './apiCalls';
import Booking from './classes/Booking';

const main = document.querySelector('main');
const menu = document.getElementById('menu');
const loginPage = document.getElementById('loginPage')
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const customerDashboard = document.getElementById('customerDashboard');
const cardsSection = document.getElementById('cardsSection');
const totalSpentSection = document.getElementById('totalSpentSection');
const bookingDashboard = document.getElementById('booking-dashboard');
const bookMenuButton = document.getElementById('bookMenuButton');
const dashboardMenuButton = document.getElementById('dashboardMenuButton');
const dateInput = document.getElementById('dateInput');
const availableRoomsSection = document.getElementById('availableRooms');
const filterButton = document.getElementById('filterButton');
const typeFilters = document.querySelectorAll('.checkbox-js');
const errorMessage = document.getElementById('errorMessage');

const domUpdates = {
  populateBookings() {
    cardsSection.innerHTML = '';
    domUpdates.createBookingCards();
  },

  formatDate(date) {
    const mm = date.slice(5, 7)
    const dd = date.slice(8,10)
    const yyyy = date.slice(0, 4)
    return mm + '/' + dd + '/' + yyyy;
  },

  createBookingCards() {
    if (!hotel.currentCustomer.bookings) {
      cardsSection.innerHTML = `
        <p>You don't have any bookings yet. Visit the 'Book Now' page to create a new booking!</p>
      `;
    } else {
      const cards = hotel.currentCustomer.bookings.sort((a, b) => {
        const aDate = domUpdates.formatDate(a.date);
        const bDate = domUpdates.formatDate(b.date);
        return new Date(aDate) - new Date(bDate);
      });
      cards.forEach(booking => {
        const room = hotel.rooms.find(room => {
          return room.number === booking.roomNumber
        });
        cardsSection.innerHTML += `
        <section class="card" tabindex="0">
        <p>Date: ${domUpdates.formatDate(booking.date)}</p>
        <p>Room Number: ${booking.roomNumber}<p>
        <p>Room Type: ${room.roomType}</p>
        <p>Cost: $${room.costPerNight}</p>
        </section>
        `;
      });
    }
  },

  populateAvailableRooms() {
    availableRoomsSection.innerHTML = '';
    hotel.getAvailableRooms(dateInput.value);
    domUpdates.checkFilters();
    domUpdates.createRoomCards();
  },

  createRoomCards() {
    if (!hotel.availableRooms.length) {
      availableRoomsSection.innerHTML =
        '<p class="booking-error">Unfortunately, there are no rooms that match this search. Please try another date or room type!</p>';
    } else {
      hotel.availableRooms.forEach(room => {
        const bidet = room.bidet ? 'yes' : 'no';
        availableRoomsSection.innerHTML += `
          <section class="card" tabindex="0">
            <p>Room Number: ${room.number}</p>
            <p>Cost: $${room.costPerNight}<p>
            <p>Room Type: ${room.roomType}</p>
            <p>Number of Beds: ${room.numBeds}</p>
            <p>Bed Size: ${room.bedSize}</p>
            <p>Bidet: ${bidet}</p>
            <button class="book-button" id="${room.number}">Book Room</button>
          </section>
        `;
      })
    }
  },

  populateTotalSpent() {
    const total = hotel.currentCustomer.calculateTotalSpent(hotel.rooms);
    totalSpentSection.innerHTML = '';
    totalSpentSection.innerHTML += `
      <h4 class="total-spent">$${total}</h4>
    `;
  },

  hideLoginPage() {
    domUpdates.hide([loginPage]);
    main.classList.remove('align-left');
    main.classList.add('align-center');
  },

  displayCustomerDashboard() {
    domUpdates.show([customerDashboard, menu]);
    domUpdates.hide([bookingDashboard]);
    dashboardMenuButton.classList.add('clicked');
    bookMenuButton.classList.remove('clicked');
    domUpdates.populateBookings();
  },

  displayBookingDashboard() {
    domUpdates.show([bookingDashboard]);
    domUpdates.hide([customerDashboard]);
    dashboardMenuButton.classList.remove('clicked');
    bookMenuButton.classList.add('clicked');
    domUpdates.setMinDate();
    domUpdates.populateAvailableRooms();
  },

  checkFilters() {
    const types = [];
    typeFilters.forEach(checkbox => {
      if (checkbox.checked) {
        types.push(checkbox.value.replace('-', ' '));
       }
    });
    if (types.length > 0) {
      hotel.filterRooms(types);
    }
  },

  bookRoom(e) {
    const date = dateInput.value.replaceAll('-', '/')
    const roomNumber = parseInt(e.target.id)
    hotel.currentCustomer.createNewBooking(date, roomNumber)
      .then(response => {
        domUpdates.displaySuccessfulBooking(e, date)
        fetchBookings()
          .then(data => {
            updateBookings(data.bookings);
            setTimeout(() => {domUpdates.populateAvailableRooms()}, 2500);
          })
          .catch(error => {
            console.log(error.message)
            domUpdates.displayBookingError()
          })
      })
      .catch(error => {
        console.log(error.message)
        domUpdates.displayBookingError()
      })
  },

  displaySuccessfulBooking(e, date) {
    const card = e.target.parentElement;
    card.innerHTML = `
      <p>You have booked room ${e.target.id} for ${domUpdates.formatDate(date)}!
    `;
    card.classList.add('booked');
  },

  displayBookingError() {
    availableRoomsSection.innerHTML = '<p class="booking-error">Something went wrong. Reload the page and try again.</p>';
  },

  displayLoginUserError() {
    errorMessage.innerText = 'Username or Password is incorrect. Please try again';
    setTimeout(errorMessage.innerText = '', 3000);
  },

  displayFetchError(error) {
    errorMessage.innerText = error.message;
    setTimeout(() => {errorMessage.innerText = ''}, 3000);
  },

  getTodaysDate() {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
  },

  setMinDate() {
    const today = domUpdates.getTodaysDate().replaceAll('/', '-');
    dateInput.min = today;
    dateInput.value = today;
  },

  show(elements) {
    elements.forEach(element => {
      element.classList.remove('hidden');
    });
  },

  hide(elements) {
    elements.forEach(element => {
      element.classList.add('hidden');
    });
  }
}

loginButton.addEventListener('click', () => {
  validateLogin(username.value, password.value)
});

bookMenuButton.addEventListener('click', () => {
  domUpdates.displayBookingDashboard(hotel);
});

dashboardMenuButton.addEventListener('click', () => {
  domUpdates.displayCustomerDashboard(hotel);
});

filterButton.addEventListener('click', domUpdates.populateAvailableRooms);

availableRoomsSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('book-button')) {
    domUpdates.bookRoom(e);
  }
})

export {domUpdates}
