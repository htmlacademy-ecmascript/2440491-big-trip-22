import AbstractView from '../framework/view/abstract-view';
import { createElement } from '../framework/render';

function createNewPointTemplate(filterText) {
  const FilterDependsOfText = {
    'Everything': 'Click New Event to create your first point',
    'Past': 'There are no past events now',
    'Present' : 'There are no present events now',
    'Future': 'There are no future events now'
  };

  return(`<p class="trip-events__msg">${FilterDependsOfText[filterText] || ''}</p>
  <!--
    Значение отображаемого текста зависит от выбранного фильтра:
      * Everthing – 'Click New Event to create your first point'
      * Past — 'There are no past events now';
      * Present — 'There are no present events now';
      * Future — 'There are no future events now'.
  -->`);
}

export default class NoPointView extends AbstractView {
  #element = null;
  #currentFilterText = null;

  constructor({filterText}) {
    super();
    this.#currentFilterText = filterText;
  }

  get template() {
    return createNewPointTemplate(this.#currentFilterText);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }
}
