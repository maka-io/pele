import { Meteor } from 'meteor/meteor';
import { Subscription } from './subscription.js';

/**
 * If the Subscription collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Subscription.find().count() === 0) {
 *       const data = Assets.getText('subscription.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Subscription.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Subscription
 * @member Fixtures
 */
Meteor.startup(() => {

});
