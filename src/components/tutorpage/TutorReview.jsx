import React from "react"
import {getRatingElement} from "../../TutorPage";

function computeProgress(curr, total) {
    return Math.floor((curr / total) * 100);
}

function StarComponent(props) {
    const currProgress = computeProgress(props.countReviews, props.totalReviews);
    return (
        <div className="tutor-page--tutor-review--stats">
            <strong>{props.starValue}</strong>
            <img alt="Star" src="./images/star-filled-yellow.svg"/>
            <progress max="100" value={currProgress}></progress>
            <p className="tutor-page--tutor-review-counts tutor-page--tutor-review--counts-small">({props.countReviews})</p>
        </div>
    )
}

function determineReviews(topRating, mostCriticalRating) {
    if (!topRating) return null;
    const reviewArr = [];

    const topRatingProfilePic = `./images/${topRating.profilePic}`;
    reviewArr.push(
    <div key={0} className="tutor-page--tutor-review--student">
        <div className="tutor-page--tutor-review--student-info">
            <img className="tutor-page--tutor-review--student-pic" alt="Student profile pic" src={topRatingProfilePic}/>
            <h3>{topRating.name}</h3>
        </div>
        <p className="tutor-page--tutor-review--student-message">{topRating.message}</p>
    </div>
    )

    if (mostCriticalRating) {
        reviewArr.push(<hr key={1} />)
        const mostCriticalRatingProfilePic = `./images/${mostCriticalRating.profilePic}`;
        reviewArr.push(
            <div key={2} className="tutor-page--tutor-review--student">
                <div className="tutor-page--tutor-review--student-info">
                    <img className="tutor-page--tutor-review--student-pic" alt="Student profile pic" src={mostCriticalRatingProfilePic}/>
                    <h3>{mostCriticalRating.name}</h3>
                </div>
                <p className="tutor-page--tutor-review--student-message">{mostCriticalRating.message}</p>
            </div>
        )
    }

    return reviewArr;
}

function TutorReview(props) {
    const ratingEl = getRatingElement(props.review.rating);
    const reviewEl = determineReviews(props.review.topRating, props.review.mostCriticalRating)

    return (
        <section className="tutor-page--tutor-review">
            <h1 className="tutor-page--section-header">Rating</h1>
            <div className={`tutor-page--tutor-review--layout ${!reviewEl ? "tutor-page--tutor-review--layout-no-review" : ""}`}>
                <aside className="tutor-page--tutor-review--overview">
                    <h2 className="tutor-page--tutor-review--review">{props.review.rating}</h2>
                    <div className="tutor-page--tutor-review--stars">
                        {ratingEl}
                    </div>
                    <p className="tutor-page--tutor-review-counts">({props.review.totalReviews})</p>
                </aside>
                <aside className={`tutor-page--tutor-review-rating-drop ${!reviewEl ? "tutor-page--tutor-review-rating-drop-no-review" : ""}`}>
                    <StarComponent starValue={5} countReviews={props.review.countFiveReviews} totalReviews={props.review.totalReviews} />
                    <StarComponent starValue={4} countReviews={props.review.countFourReviews} totalReviews={props.review.totalReviews} />
                    <StarComponent starValue={3} countReviews={props.review.countThreeReviews} totalReviews={props.review.totalReviews} />
                    <StarComponent starValue={2} countReviews={props.review.countTwoReviews} totalReviews={props.review.totalReviews} />
                    <StarComponent starValue={1} countReviews={props.review.countOneReviews} totalReviews={props.review.totalReviews} />
                </aside>
                <aside className="tutor-page--tutor-review--top">
                    {reviewEl}
                </aside>
            </div>
        </section>
    )
}

export default TutorReview;