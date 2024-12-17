import BodyTitle from "./BodyTitle"


function Body(props) {

  return (
    <div className="body">
      <BodyTitle />
      {props.content}
    </div>
  )
}

export default Body



