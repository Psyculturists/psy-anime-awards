import PropTypes from 'prop-types'


function ItemBox(props){
    return(
        <div className="item-box">
            <ItemName name = {props.name}/>
            <ItemDescription description = {props.description}/>
            <ItemContent index = {props.index}/>
        </div>
    )
}

export default ItemBox

function ItemName(props){
    return(
        <div className="item-name">
            <h1>{props.name}</h1>
        </div>
    )
}

function ItemDescription(props){
    return(
        <div className="item-description">
            <p>{props.description}</p>
        </div>
    )
}

function ItemContent(props){
    return(
        <div className="item-content">
            <ItemInput index = {props.index}/>
        </div>
    )
}

function ItemInput(props){
    return(
        <div className="item-input">
            <input placeholder="Enter your Nomination" id={props.index}></input>
        </div>
    )
}


ItemBox.PropTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.string
}
ItemBox.defaultProps = {
    name: "Category",
    description: "Description description description description description description description description description description description",
    index: "0"
}