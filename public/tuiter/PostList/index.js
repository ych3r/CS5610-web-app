import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
    let content = "";
    for (let i = 0; i < posts.length; i++) {
        content += PostItem(posts[i]);
    }
    return (`
        ${content}
    `);
};

export default PostList;