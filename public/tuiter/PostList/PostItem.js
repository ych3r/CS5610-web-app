const PostItem = (posts) => {
    return (`
        <div class="row mt-2">
            <div class="d-flex col-2">
                <img src="${posts.avatarIcon}" class="image-fluid rounded-circle ttr-home-avataricon" />
            </div>
            <div class="col-10">
                <span class="ttr-xxlightgray">${posts.userName}</span>
                <span> @${posts.handle}</span>
                <span> - ${posts.time}</span> <br />
                <span class="ttr-xxlightgray">${posts.post}</span> <br />
                <img src="${posts.image}" class="ttr-home-image ttr-top-space" /> <br />
                <div class="row ttr-top-space">
                    <div class="col"><i class="fa-regular fa-comment"></i> ${posts.comment}</div>
                    <div class="col"><i class="fa-solid fa-retweet"></i> ${posts.retuit}</div>
                    <div class="col"><i class="fa-regular fa-heart"></i> ${posts.likes}</div>
                    <div class="col"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                </div>
            </div>
            <hr class="ttr-hr" />
        </div>
    `);
}

export default PostItem;