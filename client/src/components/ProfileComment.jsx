import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import getOnePiece from "../services";


const ProfileComment = (props) => {
    const { comment, art_id } = props.comment
    // const [artPiece, setArtPiece] = useState({})

    return (
        <article id="detail-piece">
            <img src={art_id.url}/>
            <p>{comment}</p>
            <Link to={`/edit-comment/${props.comment.id}`}><button className="fade" >Edit Comment</button></Link>
        </article>
    );
};

export default ProfileComment;