import EventModel from './model/event-model';
import TravelPresenter from './presenter/travel-presenter';
import FilterView from './view/form-filter-view.js';
import PointListView from './view/points-list-view.js';
import { render } from './render.js';

const siteMain = document.querySelector('.trip-events');
const filterSection = document.querySelector('.trip-controls__filters');

const eventModel = new EventModel();
render(new PointListView, siteMain);
const travelsList = document.querySelector('.trip-events__list');
const travelPresenter = new TravelPresenter({travelContainer: travelsList, eventModel});

render(new FilterView(), filterSection);
travelPresenter.init();

