import { useNavigate } from "react-router-dom"

const Event = (props) => {

    const navigate = useNavigate()

    const onClick = (id) => {
        navigate(`/events/${id}`)
    }

  return (
    
    <div className="event-post" onClick={() => onClick(props.id)}>
        <h2>{props.name}</h2>
        <h5>{props.address}</h5>
        <h5>When: {props.date}, {props.time}</h5>
    </div>
    
  )
}

export default Event