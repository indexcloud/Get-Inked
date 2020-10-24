// This function takes the value of the given HTML element and places it into an object which is then passed into an array.
function saveReview(event) {
    // Stops the elemnet from refreshing once clicked. 
    event.preventDefault();
    // An emtey  array for the object to be added to.
    const comments = [];
    // An object that contains the values of the HTML elements.
    let text = {
        comment : document.getElementById('exampleFormControlTextarea1').value,
        name : document.getElementById('exampleFormControlInput1').value,
        starRating : document.getElementById('exampleFormControlSelect1').value
    };
    // Adding the text object to the comments array. 
    comments.push(text);
    // Setting the HTML of the comments div equal to the result of the renderComments function.
    let reviews = document.createElement('div');
    document.getElementById('comments').appendChild(reviews);
    reviews.innerHTML = renderComments(comments)
};


// This function takes in the comments array and maps over it to return another array that is then passed into the rendered card.
function renderComments(comments) {
    // Built in map function used to inject the data from the comments array in to the card.
    let commentsReview = comments.map(review => {
        // Returning the rendered card with the data add through templet literal's.
        return `
        <div id="card-wrapper">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${review.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${review.starRating} star's</h6>
                    <p class="card-text">${review.comment}</p>
                </div>
            </div>
        </div>
        `
    // Joining the different indexs together.
    }).join('');
    // Returning the new array 
    return commentsReview;
}
// This Function renders the form that is filled out to the DOM.
function renderForms() {
    return `
<form>
    <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name">
    </div>
    <div class="form-group">
    <label for="exampleFormControlSelect1">Star Rating</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div> 
    <div class="form-group">
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Leave a Review"></textarea>
    </div>
    <div>
    <button id="submitButton" type="submit" class="btn btn-dark">Submit Review</button>
    </div>
</form>
    `
};
// Setting the HTML of the forms div equal to the result of the renderForms() function.
document.querySelector('.shops-review').innerHTML = renderForms();
// Taking the submitButton and adding a click event listener to it that runs the saveReview() once the event has happened.
document.getElementById('submitButton').addEventListener('click', saveReview);