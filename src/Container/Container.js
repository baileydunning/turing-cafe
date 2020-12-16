import Card from '../Card/Card'

const Container = ({ reservations, cancelReservation }) => {
  const reservationsOnDisplay = reservations.map(reservation => {
    return <Card 
              key={ reservation.id } 
              reservation={ reservation }
              cancelReservation={ cancelReservation } 
            />
  })

  return (
    <section data-testid='reservations-container'>
      { reservationsOnDisplay }
    </section>
  )
}

export default Container