import NewPointView from '../view/point-view.js';
import EventFormView from '../view/form-create-view.js';
import SortView from '../view/form-sort-view.js';
import { render, replace } from '../framework/render.js';

export default class TravelPresenter {
  constructor({travelContainer, eventModel}) {
    this.travelContainer = travelContainer;
    this.eventModel = eventModel;
  }

  init() {
    this.travelEvents = [...this.eventModel.getEvents()];
    this.#renderAll();
  }

  /** Функция для отрисовки всех компонентов */
  #renderAll() {
    render(new SortView(), this.travelContainer);

    for (let i = 0; i < this.travelEvents.length; i++) {
      this.#renderPoints(this.travelEvents[i]);
    }
  }

  #renderPoints(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const pointComponent = new NewPointView({
      event: point,
      callback: () => {
        replacePointToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const editPointComponent = new EventFormView({
      event: point,
      callback: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replacePointToForm() {
      replace(editPointComponent, pointComponent);
    }

    function replaceFormToPoint() {
      replace(pointComponent, editPointComponent);
    }

    render(pointComponent, this.travelContainer);
  }
}
