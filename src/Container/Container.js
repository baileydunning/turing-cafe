import Card from '../Card/Card'
import './Container.css'

const Container = ({ reservations, cancelReservation }) => {
  const reservationsOnDisplay = reservations.map(reservation => {
    return <Card 
              key={ reservation.id } 
              reservation={ reservation }
              cancelReservation={ cancelReservation } 
            />
  })

  return (
    <section className='reservations-container' data-testid='reservations-container'>
      { reservationsOnDisplay }
    </section>
  )
}

export default Container