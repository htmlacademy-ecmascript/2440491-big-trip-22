import SortView from '../view/form-sort-view.js';
import { render } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import NoPointView from '../view/no-point-view.js';
import FilterView from '../view/form-filter-view.js';
import PointListView from '../view/points-list-view.js';
import { updateItem } from '../util/common.js';

export default class TravelPresenter {
  #siteMain = document.querySelector('.trip-events');
  #filterSection = document.querySelector('.trip-controls__filters');

  #travelContainer = null;
  #eventModel = null;

  #sortComponent = new SortView();
  #noPointsComponent = new NoPointView({filterText: 'Everything'});
  #pointListView = new PointListView();
  #filterView = new FilterView();

  #travelEvents = [];
  #pointPresenters = new Map();

  constructor(eventModel) {
    this.#eventModel = eventModel;
  }

  init() {
    render(this.#pointListView, this.#siteMain);
    render(this.#filterView, this.#filterSection);
    this.#travelEvents = [...this.#eventModel.getEvents()];
    this.#travelContainer = document.querySelector('.trip-events__list');
    this.#renderList();
  }

  /** Функция для отрисовки всех компонентов */
  #renderList() {
    if (this.#travelEvents === null) {
      this.#renderNoPoints();
      return;
    }
    render(this.#sortComponent, this.#travelContainer);
    this.#renderPoints();
  }

  #handlePointChange = (updatedPoint) => {
    this.#travelEvents = updateItem(this.#travelEvents, updatedPoint);
    this.#pointPresenters.get(updatedPoint[0].id).init(updatedPoint);
  };

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#travelContainer);
  }

  #renderPoints() {
    this.#travelEvents.forEach((el) => this.#renderPoint(el));
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      travelContainer: this.#travelContainer,
      onDataChange: this.#handlePointChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point[0].id, pointPresenter);
  }
}
