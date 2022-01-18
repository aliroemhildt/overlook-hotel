import {postBooking} from '../apiCalls';

class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
  }

  getAllBookings(bookings) {
    this.bookings = bookings.filter(booking => {
      return booking.userID === this.id;
    });
  }

  calculateTotalSpent(rooms) {
    const totalSpent = this.bookings.reduce((total, booking) => {
      rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      });
      return total;
    }, 0);
    return parseFloat(totalSpent.toFixed(2));
  }

  createNewBooking(date, roomNumber) {
    const booking = {
      userID: this.id,
      date: date,
      roomNumber: roomNumber
    }
    return postBooking(booking)
  }
}

export default Customer;
