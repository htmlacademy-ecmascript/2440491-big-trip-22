import { createElement } from '../render';

function createPointsList() {
  return (`<ul class="trip-events__list">
  </ul>`);
}

export default class PointListView {
  getTemplate() {
    return createPointsList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
