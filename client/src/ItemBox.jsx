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

    const [authMethods, setAuthMethods] = useState(
        {
            discord: true,
            twitch: false,
            discordMember: true,
            twitchFollower: false,
        }
    ); //["Google", "Discord", "Twitch"]

    return(
        <div className="item-content">
            {authMethods.discord || authMethods.twitch ? <ItemInput index = {props.index}/> : <ItemInputLocked index = {props.index} hover=<LoginCheck/> />}
            {authMethods.discord || authMethods.twitch ? 
            (authMethods.discordMember ? <ItemInput index = {props.index}/> :
                <ItemInputLocked index = {props.index} hover=<CheckHover message="Join the Discord Server" icon="cib:discord"/> />
            )
            : <ItemInputLocked index = {props.index} hover=<LoginCheck/> />}
            {authMethods.discord || authMethods.twitch ? 
            (authMethods.twitchFollower ? <ItemInput index = {props.index}/> :
                <ItemInputLocked index = {props.index} hover=<CheckHover message="Follow us on Twitch" icon="cib:twitch" />/>
            )
            : <ItemInputLocked index = {props.index} hover=<LoginCheck/> />}
            
            
            
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
                {props.hover}
            </div>
            </div>
        </div>
    )
}

function LoginCheck(){
    return(
        <>
            <LogInButton logtext="Log in via Discord" icon="cib:discord"/>
            <LogInButton logtext="Log in via Twitch" icon="cib:twitch"/>
        </>
    )
}

function CheckHover(props){
    return(
        <LogInButton logtext={props.message} icon={props.icon}/>
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
                        {props.logtext}
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