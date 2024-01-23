import { getRandomEvent, getOfferById } from '../mock/event.js';

const EVENT_COUNT = 3;

export default class EventModel {
  createEventModel() {
    const currentEvent = getRandomEvent();
    const currentOffers = currentEvent.offersId ? currentEvent.offersId.map((offerId) => getOfferById(offerId)) : 0;
    return [currentEvent, currentOffers];
  }

  events = Array.from({length: EVENT_COUNT}, this.createEventModel);

  getEvents() {
    return this.events;
  }
}
