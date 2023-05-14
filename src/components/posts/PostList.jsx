import { useEffect, useState } from "react";
import { sendGetRequest, sendDeleteRequest } from "../../utils/fetchData";
import PostItem from "./PostItem";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDelete = async (id) => {
        setPosts(posts.filter(post => post.id !== id));

        await sendDeleteRequest(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    useEffect(() => {
        const sendRequest = async () => {
            const data = await sendGetRequest("https://jsonplaceholder.typicode.com/posts?_limit=50");

            setPosts(data);
            setLoading(false);
        }

        sendRequest();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (<ul className="post-list">
        {
            posts.map(post => {
                return <PostItem key={post.id} post={post} onPostDelete={() => handleDelete(post.id)} />
            })
        }
    </ul>);
}

export default PostList;