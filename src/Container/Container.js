import Card from '../Card/Card'

const Container = ({ reservations }) => {
  const reservationsOnDisplay = reservations.map(reservation => {
    return <Card 
              key={ reservation.id } 
              reservation={ reservation } 
            />
  })

  return (
    <section>
      { reservationsOnDisplay }
    </section>
  )
}

export default Container