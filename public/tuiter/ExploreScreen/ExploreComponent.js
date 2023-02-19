import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
            <div class="col-11">
                <div class="ttr-searchbar">
                    <i class="fa-solid fa-search"></i>
                    <input placeholder="Search Tuiter" />
                </div>
            </div>
            <div class="col-1">
                <a href="explore-setting.html">
                    <i class="fa-solid fa-gear fa-2x ttr-gear-pos ttr-blue"></i>
                </a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs ttr-top-space">
            <li class="nav-item">
                <a class="nav-link active" href="/"><span class="ttr-xxlightgray">For you</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link ttr-xxlightgray" href="/">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ttr-xxlightgray" href="/">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ttr-xxlightgray" href="/">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link ttr-xxlightgray" href="/">Entertainment</a>
            </li>
        </ul>
        <div class="card ttr-top-space">
            <div class="ttr-image">
              <img src="../../images/Starship-Mk1-Day.webp" class="card-img-top" />
              <span class="ttr-image-overlay">SpaceX's Starship</span>
            </div>
            ${PostSummaryList()}
        </div>
    `);
}

export default ExploreComponent;