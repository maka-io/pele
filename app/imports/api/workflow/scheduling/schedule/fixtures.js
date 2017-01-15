import { Meteor } from 'meteor/meteor';
import { Schedule } from './schedule.js';

/**
 * If the Schedule collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Schedule.find().count() === 0) {
 *       const data = Assets.getText('schedule.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Schedule.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Schedule
 * @member Fixtures
 */
Meteor.startup(() => {

});
