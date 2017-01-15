import { Meteor } from 'meteor/meteor';
import { Substance } from './substance.js';

/**
 * If the Substance collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Substance.find().count() === 0) {
 *       const data = Assets.getText('substance.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Substance.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Substance
 * @member Fixtures
 */
Meteor.startup(() => {

});
