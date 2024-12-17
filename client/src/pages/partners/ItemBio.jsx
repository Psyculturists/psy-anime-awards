import PropTypes from 'prop-types'


function ItemBio(props){
    return(
        <div className="item-bio">
            <div className='img-bio-container'>
                <div className="img-bio">
                    <div className="bio-decoration">
                        <img className="bio-image" src={props.imageURL}></img>
                    </div>
                </div>
            </div>
            <div className="bio-info">
                <BioName name={props.name}/>
                <BioDescription description={props.description}/>
            </div>
        </div>
    )
}

export default ItemBio


function BioName(props){
    return(
        <div className="bio-name">
            <h2>{props.name}</h2>
        </div>
    )
}

function BioDescription(props){
    return(
        <div className="bio-description">
            <p>{props.description}</p>
        </div>
    )
}

export function ItemTitle(props){
    return(
        <div className="section-title">
            <h1>{props.name}</h1>
        </div>
    )
}



ItemBio.PropTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string
}
ItemBio.defaultProps = {
    name: "Name",
    imageURL: "/",
    description: "Description description description description description description description description description description description"
}