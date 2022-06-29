import { useState } from "react";

const Card = ({ name, img, options }) => {
    
    console.log(name);

    const [flip, setFlip] = useState(false);

    const handleCardClick = (e) => {
        setFlip(!flip);
        console.log(flip);
    }

    return ( 
        <div onClick={handleCardClick} className="card-container" >
            { !flip 
            ? <> 
            <img src={img} alt="images" />
            <h3>{name}</h3>
            </> 
            : 
            <ul>{options.map((x) => <li>{x}</li>)} </ul>}
        </div>
     );
}
 
export default Card;