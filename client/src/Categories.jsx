
import categories from '../public/categories.json'
import ItemBox from './ItemBox'


function Categories(){
    return(
        <>
        {
            categories.map(item =>
                item["description"] == "" ? <ItemBox name={item["name"]}/> : <ItemBox name={item["name"]} description={item["description"]}/>
            )
        }
        </>
    )
}

export default Categories