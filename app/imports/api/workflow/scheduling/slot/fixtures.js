import { Meteor } from 'meteor/meteor';
import { Slot } from './slot.js';

/**
 * If the Slot collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Slot.find().count() === 0) {
 *       const data = Assets.getText('slot.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Slot.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Slot
 * @member Fixtures
 */
Meteor.startup(() => {

});
