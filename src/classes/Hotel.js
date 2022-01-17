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
      console.log("input date: ", date, "booking date: ", booking.date)
      if (booking.date === date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
    this.availableRooms = this.rooms.filter(room => {
      return !bookedRooms.includes(room.number);
    });
  }

  calculateTotalRevenue(date) {
    return this.rooms.reduce((acc, room) => {
      const roomBooking = this.bookings.find(booking => {
        return ((booking.roomNumber === room.number) && (booking.date === date));
      })
      if (roomBooking) {
        acc += room.costPerNight;
      }
      return acc;
    }, 0);
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

  calculatePercentOccupied(date) {
    const occupied = this.bookings.filter(booking => {
      return booking.date === date;
    });
    if (occupied.length > 0) {
      return Math.round((occupied.length / this.rooms.length) * 100);
    } else {
      return 0;
    }
  };
}

export default Hotel;
