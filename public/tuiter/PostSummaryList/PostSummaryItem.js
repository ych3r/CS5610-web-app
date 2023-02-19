const PostSummaryItem = (post) => {
  return `
    <div class="card-body">
        <div class="d-flex row">
            <div class="col-9">
            <span>${post.topic}</span>
            <h6 class="card-title">
                ${post.userName} <i class="fa-solid fa-circle-check"></i>
                <span> - ${post.time}</span>
            </h6>
            <p class="card-text ttr-xxlightgray">
                ${post.title}
            </p>
            </div>
            <div class="col-3 d-flex justify-content-end">
            <img
                src="${post.image}"
                class="img-fluid rounded ttr-image-size"
            />
            </div>
        </div>
    </div>
    <hr class="ttr-hr" />
    `;
};

export default PostSummaryItem;
