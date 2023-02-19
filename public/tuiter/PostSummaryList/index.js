import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    let content = ""
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i]);
        content += PostSummaryItem(posts[i]);
    }
    console.log(content);
    return (`
        <div class="card">
            ${content}
        </div>
    `);
};

export default PostSummaryList;