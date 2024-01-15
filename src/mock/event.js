import { EVENTS } from '../const.js';
import { getRandomElement } from '../util.js';

const mockEvents = [{
  palce: 'Monaco',
  day: new Date('2024-03-02'),
  type: getRandomElement(EVENTS),
  startTime: '10:30',
  finishTime: '11:50',
  price: 20,
  offers: ['Order Something', 'Guaranty'],
  offersPrice: [getRandomElement([10, 20, 50, 75, 100,]), getRandomElement([10, 20, 50, 75, 100,])],
  isFavourite: false,
  destination: {
    hasDestination: true,
    text: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    photo: 5
  }
},
{
  palce: 'Italy',
  day: new Date('2024-04-14'),
  type: getRandomElement(EVENTS),
  startTime: '8:30',
  finishTime: '10:30',
  price: 6320,
  offers: ['Order Something', 'Guaranty'],
  offersPrice: [getRandomElement([10, 20, 50, 75, 100,]), getRandomElement([10, 20, 50, 75, 100,])],
  isFavourite: true,
  destination: {
    hasDestination: true,
    text: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    photo: 5
  }
},
{
  palce: 'Germany',
  day: new Date('2024-04-14'),
  type: getRandomElement(EVENTS),
  startTime: '12:00',
  finishTime: '18:20',
  price: 6320,
  offers: ['Order Something', 'Guaranty'],
  offersPrice: [getRandomElement([10, 20, 50, 75, 100,]), getRandomElement([10, 20, 50, 75, 100,])],
  isFavourite: false,
  destination: {
    hasDestination: false,
    text: '',
    photo: 0
  }
}];

function getRandomEvent() {
  return getRandomElement(mockEvents);
}
export {getRandomEvent};
