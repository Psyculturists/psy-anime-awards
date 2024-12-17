
import { useEffect } from "react";

function BodyTitle(){
    return(
      <div className="body-title">
        <h1 className="title">
          Psy Anime Awards
        </h1>
        {/* <EffectContainer nameclass="effect-container"/> */}
        {/* <EffectContainer nameclass="effect-container-rot"/> */}
        {/* <EffectContainer nameclass="effect-container-rot"/> */}
      </div>
    )
}

//animation: rotation-animation 5s ease infinite;
function EffectContainer(props){
    return(
        <div className={props.nameclass}>
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            {/* <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect />
            <Effect /> */}
            
        </div>
    )
}


function Effect(){

    useEffect(() =>{
        applyDelay();
    })

    function applyDelay(){
        const elements = document.getElementsByClassName("effect");

        for (var i = 0; i < elements.length; i++){
            const randomDuration = (Math.random() * 4 + 1).toFixed(2) + 's';
            elements[i].style.animationDelay = randomDuration;
        }
    }

    // document.getElementsByClassName("effect").style.animationDelay = randomDuration;

    return(
        <div className="effect">
        </div>
    )
}

export default BodyTitle