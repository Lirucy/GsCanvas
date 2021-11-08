import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOnePiece, createComment } from "../services";

const ArtDetail = (props) => {
  const [artPiece, setArtPiece] = useState({});
  const [comment, setComment] = useState("");
  const params = useParams();
  const artId = params.id;
  const history = useHistory();

  useEffect(() => {
    const fetchArtById = async () => {
      const currentPiece = await getOnePiece(artId);
      setArtPiece(currentPiece);
    };
    fetchArtById();
  }, [artId]);

  const clickHandler = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
    };
    await createComment(newComment, artId);
    history.push("/user-profile");
  };

  return (
    <div id="detail-body">
      <article>
        <h3>{artPiece?.title}</h3>
        <img className="fade" src={artPiece?.url} alt="art piece" />
        <h3>Comments:</h3>
        {artPiece?.comments?.map((comment) => (
          <p>
            ~{comment.user.username}~<br />
            {comment.comment}
          </p>
        ))}
        {props.user ? (
          <>
            <input
              id="comment"
              type="text"
              required
              placeholder="comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="fade" type="submit" onClick={clickHandler}>
              Comment
            </button>
          </>
        ) : (
          <></>
        )}
      </article>
    </div>
  );
};

export default ArtDetail;
