import PropTypes from 'prop-types'
import { useState } from 'react'


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
            {/* <ItemInput index = {props.index}/> */}
            <ItemInputLocked index = {props.index} method="Google" icon="cib:google"/>
            <ItemInputLocked index = {props.index} method="Discord" icon="cib:discord"/>
            <ItemInputLocked index = {props.index} method="Twitch" icon="cib:twitch"/>
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

function ItemInputLocked(props){
    return(
        <div className='item-input'>
            <div className='input-locked'>
                <input disabled="true" placeholder="Enter your Nomination" id={props.index}></input>
            <div className='log-in-hover'>
                <LogInButton logtext={props.method} icon={props.icon}/>
            </div>
            </div>
        </div>
    )
}

function LogInButton(props){
    return(
        <button className='log-in-button'>
            <div className='log-in-field'>
                <div className='log-in-container'>
                    <div className='log-in-icon'>
                        <span className='iconify' data-icon={props.icon}></span>
                    </div>
                    <div className='log-in-text'>
                        Log in via {props.logtext}
                    </div>
                </div>
            </div>
        </button>
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