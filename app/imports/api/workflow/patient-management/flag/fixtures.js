import { Meteor } from 'meteor/meteor';
import { Flag } from './flag.js';

/**
 * If the Flag collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Flag.find().count() === 0) {
 *       const data = Assets.getText('flag.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Flag.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Flag
 * @member Fixtures
 */
Meteor.startup(() => {

});
