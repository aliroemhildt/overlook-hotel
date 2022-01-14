import Customer from '../test/customer-test.js';
import sampleCustomers '../src/data/sampleCustomers';

describe('Customer', () => {
  const customer;

  beforeEach(() => {
    customer = sampleCustomers[0];
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have an id', () => {
    expect(customer.id).to.equal(sampleCustomer[0].id)
  })

  it('should have a name', () => {
    expect(customer.name).to.equal(sampleCustomer[0].name)
  })

  it('should return all bookings for that customer')
})
