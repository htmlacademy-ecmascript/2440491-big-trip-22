import EventModel from './model/event-model';
import TravelPresenter from './presenter/travel-presenter';

const eventModel = new EventModel();

const travelPresenter = new TravelPresenter(eventModel);
travelPresenter.init();


