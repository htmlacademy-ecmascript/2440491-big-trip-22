import { mockEvents, mockOffers} from '../mock/event.js';
import { getRandomElement } from '../util.js';

const EVENT_COUNT = 3;

export default class EventModel {
  #getRandomEvent() {
    return getRandomElement(mockEvents);
  }

  createEventModel = () => {
    const currentEvent = this.#getRandomEvent();
    return [currentEvent, mockOffers];
  };

  events = Array.from({length: EVENT_COUNT}, this.createEventModel);

  getEvents() {
    return this.events;
  }
}
