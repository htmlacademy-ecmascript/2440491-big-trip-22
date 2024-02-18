import { mockEvents, mockOffers} from '../mock/event.js';
import { getRandomElement } from '../util/common.js';
import { nanoid } from 'nanoid';

const EVENT_COUNT = 12;

export default class EventModel {
  #getRandomEvent() {
    return {id: nanoid(), ...getRandomElement(mockEvents)};
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
