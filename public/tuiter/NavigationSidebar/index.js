const NavigationSidebar = () => {
  return `
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-house-chimney"></i>
                <span>Home</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-hashtag"></i>
                <span>Explore</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-bell"></i>
                <span>Notifications</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-envelope"></i>
                <span>Messages</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-bookmark"></i>
                <span>Bookmarks</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-list"></i>
                <span>Lists</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-user"></i>
                <span>Profile</span>
            </a>
            <a class="list-group-item list-group-item-action" href="/">
                <i class="fa-solid fa-ellipsis"></i>
                <span>More</span>
            </a>
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tuit</a>
        </div>
    `;
};

export default NavigationSidebar;
