import { Meteor } from 'meteor/meteor';
import { Composition } from './composition.js';

/**
 * If the Composition collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Composition.find().count() === 0) {
 *       const data = Assets.getText('composition.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Composition.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Composition
 * @member Fixtures
 */
Meteor.startup(() => {

});
