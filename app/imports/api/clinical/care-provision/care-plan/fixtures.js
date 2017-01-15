import { Meteor } from 'meteor/meteor';
import { CarePlan } from './care-plan.js';

/**
 * If the CarePlan collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (CarePlan.find().count() === 0) {
 *       const data = Assets.getText('care-plan.json') || [ {} ];
 *       data.forEach((datum) => {
 *           CarePlan.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.CarePlan
 * @member Fixtures
 */
Meteor.startup(() => {

});
