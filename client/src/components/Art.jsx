import { Link } from "react-router-dom";

const Art = (props) => {
    const { title, url } = props.artPiece;
    
    return (
        <article>
            <h3 style={{color: "white"}}>{title}</h3>
            <Link to={`/art/${props.artPiece.id}`}><img src={url} alt="art piece"/></Link>
        </article>
    );
};

export default Art;