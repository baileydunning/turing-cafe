const Card = ({ reservation }) => {
  return (
    <div>
      <h2>{ reservation.name }</h2>
      <p>{ reservation.date }</p>
      <p>{ reservation.time }</p>
      <p><b>Number of Guests: </b>{reservation.number}</p>
      <button>CANCEL</button>
    </div>
  )
}

export default Card