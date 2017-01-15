import { Meteor } from 'meteor/meteor';
import { Encounter } from './encounter.js';

/**
 * If the Encounter collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Encounter.find().count() === 0) {
 *       const data = Assets.getText('encounter.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Encounter.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Encounter
 * @member Fixtures
 */
Meteor.startup(() => {

});
