import { createElement } from '../framework/render.js';
import AbstractView from '../framework/view/abstract-view.js';
import { toEditTime } from '../util/point.js';

function createEventTemplate(event) {
  const travelPoint = event[0];
  const offers = event[1];
  const {day, type, place, destination, startTime, finishTime, price } = travelPoint;
  const offerEls = [];
  offers.forEach((el) => {
    const uniqueId = el.text.split(' ').at(-1);
    let isChecked = '';
    if (travelPoint.offersId) {
      isChecked = (travelPoint.offersId).indexOf(el.id) !== -1 ? 'checked' : '';
    }
    offerEls.push(`<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${uniqueId}" type="checkbox" name="event-offer-${uniqueId}" ${ isChecked } >
    <label class="event__offer-label" for="event-offer-${uniqueId}">
      <span class="event__offer-title">${el.text}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${el.price}</span>
    </label>
  </div>`);
  });

  const photosEls = [];
  if (destination.photo !== 0) {
    destination.photo.forEach((el) => {
      photosEls.push(`<img class="event__photo" src="img/photos/${el}.jpg" alt="Event photo">`);
    });
  }

  return (`<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${type[0].toUpperCase() + type.slice(1)}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${place[0].toUpperCase() + place.slice(1)}" list="destination-list-1">
        <datalist id="destination-list-1">
          <option value="Amsterdam"></option>
          <option value="Geneva"></option>
          <option value="Chamonix"></option>
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${toEditTime(day).slice(0, -5) + startTime}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${toEditTime(day).slice(0, -5) + finishTime}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${offerEls.join('')}
        </div>
      </section>

      ${destination.hasDestination ? (`<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.text}</p>

      ${photosEls ? (`<div class="event__photos-container">
        <div class="event__photos-tape">
          ${photosEls.join('')}
        </div>
      </div>`) : ''}
    </section>`) : ''}
    </section>
  </form>
</li>`);
}

export default class EventFormView extends AbstractView {
  #element = null;
  #event = null;
  #callback = null;

  constructor({event, callback}) {
    super();
    this.#event = event;
    this.#callback = callback;
    this.element.querySelector('form').addEventListener('submit', this.#OnSubmit);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#OnSubmit);
  }

  get template() {
    return createEventTemplate(this.#event);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  #OnSubmit = (evt) => {
    evt.preventDefault();
    this.#callback(this.#element);
  };
}
