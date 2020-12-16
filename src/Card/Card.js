import './Card.css'

const Card = (props) => {
  return (
    <div className='reservation-card'>
      <h2>{ props.reservation.name }</h2>
      <p>{ props.reservation.date }</p>
      <p>{ props.reservation.time }</p>
      <p><b>Number of Guests: </b>{ props.reservation.number }</p>
      <button 
        className='cancel-button'
        onClick={() => props.cancelReservation(props.reservation.id)}>
        CANCEL
      </button>
    </div>
  )
}

export default Card