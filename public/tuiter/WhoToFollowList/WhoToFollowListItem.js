const WhoToFollowListItem = (who) => {
    return `
    <div class="d-flex row list-group-item">
        <div class="col-2 ttr-whotofollowlist-icon">
            <img 
                src="${who.avatarIcon}" 
                class="image-fluid rounded-circle ttr-sidebar-image"
            />
        </div>
        <div class="col ttr-whotofollowlist-label">
            <span>${who.userName}</span> <i class="fa-solid fa-circle-check"></i><br />
            <span>@${who.handle}</span>
        </div>
        <div class="col-2 ttr-whotofollowlist-button">
            <a href="/" class="btn btn-primary btn-block rounded-pill float-end">
                Follow
            </a>
        </div>
    </div>
    `;
};

export default WhoToFollowListItem;