const fetchCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => handleError(response))
}

const fetchRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => handleError(response))
}

const fetchBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => handleError(response))
}

const fetchSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => handleError(response))
}

const postBooking = (booking) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => handleError(response))
}

const handleError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong. Please reload the page and try again.');
  } else {
    return response.json();
  }
}

export {
  fetchCustomers,
  fetchRooms,
  fetchBookings,
  fetchSingleCustomer,
  postBooking
}
