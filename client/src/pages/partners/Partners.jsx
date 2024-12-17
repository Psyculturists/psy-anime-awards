import ItemBio, { ItemTitle } from "./ItemBio"
import React from "react"

import data from '../../../public/partners.json'

// const images = require.context('../../assets/images');
// const imageList = images.keys().map(image => images(image));


function Partners(){
    return (
        <div className="partners-body">
        {
            data.map(section =>
                <div className="bio-section">
                    <ItemTitle name={section["title"]}/>
                    <div className="bio-container">
                    {
                        section.hasOwnProperty("items") ?
                        section["items"].map(item =>
                            <ItemBio name={item["name"]} description={item["bio"]} imageURL={item["pic_url"]}/>
                        ) : null
                    }
                    </div>
                </div>
            )
        }

        </div>
    )
}

// function PartnerSection(){
//     return(
//         <div>

//         </div>
//     )
// }

export default Partners

