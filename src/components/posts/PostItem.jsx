const PostItem = ({post, onPostDelete}) => {
    return (<li className="post-item">
        <span>
        {post.title}
        </span>
        <span className="post-remove" onClick={onPostDelete}>
            &times;
        </span>
    </li>);
}
 
export default PostItem;