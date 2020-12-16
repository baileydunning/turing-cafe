const Card = (props) => {
  return (
    <div>
      <h2>{ props.reservation.name }</h2>
      <p>{ props.reservation.date }</p>
      <p>{ props.reservation.time }</p>
      <p><b>Number of Guests: </b>{ props.reservation.number }</p>
      <button onClick={() => props.cancelReservation(props.reservation.id)}>CANCEL</button>
    </div>
  )
}

export default Card