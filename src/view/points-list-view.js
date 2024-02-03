import { createElement } from '../framework/render.js';
import AbstractView from '../framework/view/abstract-view.js';

function createPointsList() {
  return (`<ul class="trip-events__list">
  </ul>`);
}

export default class PointListView extends AbstractView {
  #element = null;

  get template() {
    return createPointsList();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }
}
