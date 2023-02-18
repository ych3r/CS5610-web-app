import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
  let content = ""
  for (let i = 0; i < who.length; i++) {
    console.log(who[i]);
    content += WhoToFollowListItem(who[i]);
  }
  console.log(content);
  return (`
    <ul class="list-group">
        <div class="list-group-item">
        <span>Who to follow</span>
        </div>
        ${content}
    </ul>
  `);
};

export default WhoToFollowList;
