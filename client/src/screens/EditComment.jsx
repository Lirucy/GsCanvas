import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneComment, updateComment, getAllComments, deleteComment } from "../services";

const EditComment = () => {
    const [selectedComment, setSelectedComment] = useState({})
    const [comment, setComment] = useState("")
    const params = useParams();
    const commentId = params.id;
    const history = useHistory()

    useEffect(() => {
        getOneComment(commentId).then((fetchedComment) => setSelectedComment(fetchedComment))
    }, [commentId])

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments = await getAllComments();
            const filtered = fetchedComments.filter((comment) => comment.id === commentId)
            const currentComment = filtered[0];
            setSelectedComment(currentComment)
            setComment(comment.comment);
        }
        fetchComments()
    }, [])

    const handleUpdate = async (e) => {
        try {
            e.preventDefault()
            setComment(comment)

            const commentInfo = {
                comment
            }
            await updateComment(commentInfo, commentId)
            history.push("/user-profile")
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleDelete = async (e) => {
        await deleteComment(commentId)
        history.push("/user-profile")
    }

    return (
        <div>
            
        </div>
    );
};

export default EditComment;