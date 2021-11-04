import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOnePiece, createComment } from "../services";

const ArtDetail = (props) => {
    // const { username } = props.user;
    const [artPiece, setArtPiece] = useState({})
    const [comment, setComment] = useState("")
    const params = useParams();
    const artId = params.id;
    const history = useHistory()

    useEffect(() => {
        const fetchArtById = async () => {
            const currentPiece = await getOnePiece(artId);
            setArtPiece(currentPiece);
        }
        fetchArtById();
    }, [artId])

    const clickHandler = async (e) => {
        e.preventDefault();
        const newComment = {
            comment
        }
        await createComment(newComment, artId)
        history.push("/")
    }

    return (
        <div>
            <article>
                <h3>{artPiece?.title}</h3>
                <img src={artPiece?.url} alt="art piece"/>
                <h3>Comments:</h3>
                {artPiece?.comments?.map((comment) => (
                    <p>~{comment.user.username}~<br/>{comment.comment}</p>
                ))}
                <input
                id="comment"
                type="text"
                required
                placeholder="comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit" onClick={clickHandler}>Comment</button>
            </article>
        </div>
    );
};

export default ArtDetail;