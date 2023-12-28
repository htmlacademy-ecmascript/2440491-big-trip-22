import FilterView from './view/form-filter-view';
import EventFormView from './view/form-create-view';
import SortView from './view/form-sort-view';
import NewPointView from './view/point-view';
import { render } from './render';

const siteMain = document.querySelector('.trip-events');
const filterSection = document.querySelector('.trip-controls__filters');

// Отрисовка фильров
render(new FilterView(), filterSection);

// Отрисовка в main
render(new EventFormView(), siteMain);
render(new SortView(), siteMain);
for (let i = 0; i < 3; i++) {
  render(new NewPointView(), siteMain);
}
