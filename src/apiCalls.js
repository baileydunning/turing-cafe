export const getReservationData = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(response => response.json())
}

export const postReservation = (reservation) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  })
  .then(response => response.json())
}