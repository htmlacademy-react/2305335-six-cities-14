import {Fragment, ChangeEvent, useState } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, ratingMap } from '../../common/const';

function ReviewForm (): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const isValid =
  comment.length >= MIN_COMMENT_LENGTH &&
  comment.length >= MAX_COMMENT_LENGTH &&
  rating !== '';

  function handleTextareaChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setRating(evt.target.value);
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries (ratingMap)
          .reverse()
          .map(([score, title]) => (
            <Fragment key={score}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={`${score}-stars`}
                type="radio"
                checked={rating === score}
                onChange={handleInputChange}
              />
              <label
                htmlFor={`${score}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={comment}
        onChange={handleTextareaChange}
        id="review"
        name="review"
        placeholder='Tell how was your stay, what you like and what can be improved'
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit a review, please make sure to set a rating and describe your stay with at least
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
