import React, { useState } from "react";

const AddReview = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="mb-2">
      <form className="row g-3 my-3" action="">
        <div className="row">
          <div className="form-group col-8 row ">
            <label htmlFor="name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Name"
                type="text"
                className="form-control my-2"
              />
            </label>
          </div>
          <div className="form-group col">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-select-sm mx-2 mt-2 col-10"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group mb-3">
          <label className="mx-2" htmlFor="Review">
            Review
          </label>
          <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)}id="review" className="form-control"></textarea>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
