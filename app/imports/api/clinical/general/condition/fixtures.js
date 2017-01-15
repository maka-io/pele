import { Meteor } from 'meteor/meteor';
import { Condition } from './condition.js';

/**
 * If the Condition collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Condition.find().count() === 0) {
 *       const data = Assets.getText('condition.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Condition.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Condition
 * @member Fixtures
 */
Meteor.startup(() => {

});
