import { Meteor } from 'meteor/meteor';
import { ConceptMap } from './concept-map.js';

/**
 * If the ConceptMap collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ConceptMap.find().count() === 0) {
 *       const data = Assets.getText('concept-map.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ConceptMap.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ConceptMap
 * @member Fixtures
 */
Meteor.startup(() => {

});
