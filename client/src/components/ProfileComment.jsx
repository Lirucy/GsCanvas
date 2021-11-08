import { Link } from "react-router-dom";

const ProfileComment = (props) => {
  const { comment, art_id } = props.comment;
  return (
    <article id="detail-piece">
      <img src={art_id.url} />
      <p>{comment}</p>
      <Link to={`/edit-comment/${props.comment.id}`}>
        <button className="fade">Edit Comment</button>
      </Link>
    </article>
  );
};

export default ProfileComment;
