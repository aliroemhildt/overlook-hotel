import { expect } from 'chai';
import Booking from '../src/classes/Booking.js';
import sampleBookings from '../src/data/bookings-data';

describe('Booking', () => {
  const booking = new Booking(sampleBookings[0]);

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', () => {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('should have an id', () => {
    expect(booking.id).to.be.a('string');
    expect(booking.id).to.equal("5fwrgu4i7k55hl6sz");
  });

  it('should have a user ID', () => {
    expect(booking.userID).to.be.a('number');
    expect(booking.userID).to.be.greaterThan(0);
    expect(booking.userID).to.equal(9);
  });

  it('should have a date', () => {
    expect(booking.date).to.be.a('string');
    expect(booking.date).to.equal("2022/04/22");
  });

  it('should have a room number', () => {
    expect(booking.roomNumber).to.be.a('number');
    expect(booking.roomNumber).to.equal(15);
  });
})
