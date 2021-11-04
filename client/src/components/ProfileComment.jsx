import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import getOnePiece from "../services";


const ProfileComment = (props) => {
    const { comment } = props.comment
    // const [artPiece, setArtPiece] = useState({})

    return (
        <article>
            <p>{comment}</p>
            <Link to={`/edit-comment/${props.comment.id}`}><button>Edit Comment</button></Link>
        </article>
    );
};

export default ProfileComment;