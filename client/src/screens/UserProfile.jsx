import { useEffect, useState } from "react";
import { getAllComments } from "../services";
import ProfileComment from "../components/ProfileComment"; 

const UserProfile = (props) => {
    const [filteredComments, setFilteredComments] = useState([])

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments = await getAllComments()
            const filtered = fetchedComments.filter(
                (comment) => comment.user.id === props.user?.id
            )
            console.log(fetchedComments)
            setFilteredComments(filtered)
        }
        fetchComments()
    }, [props.user])

    return (
        <section id="profile-body">
            <h2>My Comments</h2>
            <article>
                {filteredComments.map((comment) => (
                    <ProfileComment key={comment.id} comment={comment}/>
                ))}
            </article>
        </section>
    );
};

export default UserProfile;