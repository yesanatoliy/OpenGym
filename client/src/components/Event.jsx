

const Event = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <h5>{props.address}</h5>
        <h5>${props.cost}</h5>
        <h5>{props.level}</h5>
        <h5>{props.date}</h5>
        <h5>{props.time}</h5>
        <h6>{props.description}</h6>
        <button>Comments</button>
    </div>
  )
}

export default Event