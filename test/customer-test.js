import { expect } from 'chai';
import Customer from '../src/classes/Customer.js';
import sampleCustomers from '../src/data/customers-data';
import sampleBookings from '../src/data/bookings-data';
import sampleRooms from '../src/data/rooms-data';

describe('Customer', () => {
    const customer = new Customer(sampleCustomers[0])
    const booking1 = sampleBookings[4];
    const booking2 = sampleBookings[7];
    const myBookings = [sampleBookings[4], sampleBookings[7]];

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have an id', () => {
    expect(customer.id).to.equal(sampleCustomers[0].id)
  })

  it('should have a name', () => {
    expect(customer.name).to.equal(sampleCustomers[0].name)
  })

  it('should store all bookings for that customer', () => {
    customer.getAllBookings(sampleBookings)
    expect(customer.bookings).to.deep.equal(myBookings);
  });

  it('should calculate the total amount that customer has spent on all bookings', () => {
    const total = customer.calculateTotalSpent(sampleRooms);
    expect(total).to.equal(601.41);
  });

})
