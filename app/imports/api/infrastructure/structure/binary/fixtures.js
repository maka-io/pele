import { Meteor } from 'meteor/meteor';
import { Binary } from './binary.js';

/**
 * If the Binary collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Binary.find().count() === 0) {
 *       const data = Assets.getText('binary.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Binary.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Binary
 * @member Fixtures
 */
Meteor.startup(() => {

});
