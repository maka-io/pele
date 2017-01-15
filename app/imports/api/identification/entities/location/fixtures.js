import { Meteor } from 'meteor/meteor';
import { Location } from './location.js';

/**
 * If the Location collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Location.find().count() === 0) {
 *       const data = Assets.getText('location.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Location.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Location
 * @member Fixtures
 */
Meteor.startup(() => {

});
