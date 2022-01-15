import { expect } from 'chai';
import Hotel from '../src/classes/Hotel';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';
import sampleCustomers from '../src/data/customers-data';
import sampleBookings from '../src/data/bookings-data';
import sampleRooms from '../src/data/rooms-data';

describe('Hotel', () => {
  let hotel;
  let allRooms;
  let allBookings;

  beforeEach(() => {
    hotel = new Hotel(sampleRooms, sampleBookings);
    allRooms = sampleRooms.map(room => new Room (room));
    allBookings = sampleBookings.map(booking => new Booking(booking));
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should have a property that stores all rooms', () => {
    expect(hotel.rooms).to.be.an('array');
    expect(hotel.rooms.length).to.be.greaterThan(0);
    expect(hotel.rooms).to.deep.equal(allRooms);
  });

  it('should store all rooms as instances of Room', () => {
    expect(hotel.rooms[0]).to.be.an.instanceof(Room);
  });

  it('should have a property that stores all bookings', () => {
    expect(hotel.bookings).to.be.an('array');
    expect(hotel.bookings.length).to.be.greaterThan(0);
    expect(hotel.bookings).to.deep.equal(allBookings);
  })

  it('should store all bookings as instances of Booking', () => {
    expect(hotel.bookings[0]).to.be.an.instanceof(Booking);
  })

  it('should show all rooms available for a given date', () => {
    const availableRooms1 = hotel.getAvailableRooms("2022/02/16");
    const rooms1 = [...allRooms];
    rooms1.shift();

    const availableRooms2 = hotel.getAvailableRooms("2022/02/05");
    const rooms2 = [...allRooms];
    rooms2.splice(2, 2);

    expect(availableRooms1).to.deep.equal(rooms1);    
    expect(availableRooms2).to.deep.equal(rooms2);
  })

  it('should calculate the total revenue for todays date', () => {

  })

  it('should calculate the percentage of rooms occupied for todays date', () => {

  })

  it('should filter all rooms by type', () => {

  })
})
