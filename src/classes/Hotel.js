import Room from './Room';
import Booking from './Booking';
import Customer from './Customer';

class Hotel {
  constructor( customers, rooms, bookings) {
    this.rooms = this.setRooms(rooms);
    this.bookings = this.setBookings(bookings);
    this.customers = this.setCustomers(customers);
    this.availableRooms = [];
    this.currentCustomer = null;
  }

  setRooms(rooms) {
    return rooms.map(room => new Room(room));
  }

  setBookings(bookings) {
    return bookings.map(booking => new Booking(booking));
  }

  setCustomers(customers) {
    return customers.map(customer => new Customer(customer));
  }

  getAvailableRooms(date) {
    date = date.replaceAll('-', '/');
    const bookedRooms = this.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
    this.availableRooms = this.rooms.filter(room => {
      return !bookedRooms.includes(room.number);
    });
  }

  filterRooms(types) {
    this.availableRooms = this.availableRooms.reduce((acc, room) => {
      types.forEach(type => {
        if (room.roomType === type) {
          acc.push(room);
        }
      });
      return acc;
    }, []);
  }
}

export default Hotel;
