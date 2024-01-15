import NewPointView from '../view/point-view.js';
import EventFormView from '../view/form-create-view.js';
import SortView from '../view/form-sort-view.js';
import { render } from '../render.js';

export default class TravelPresenter {
  constructor({travelContainer, eventModel}) {
    this.travelContainer = travelContainer;
    this.eventModel = eventModel;
  }

  init() {
    this.travelEvents = [...this.eventModel.getEvents()];
    // Отрисовка блоков
    render(new SortView(), this.travelContainer);
    render(new EventFormView(), this.travelContainer);
    for (let i = 0; i < this.travelEvents.length; i++) {
      render(new NewPointView({event: this.travelEvents[i]}), this.travelContainer);
    }
  }
}
