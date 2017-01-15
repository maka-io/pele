import { Meteor } from 'meteor/meteor';
import { Goal } from './goal.js';

/**
 * If the Goal collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Goal.find().count() === 0) {
 *       const data = Assets.getText('goal.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Goal.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Goal
 * @member Fixtures
 */
Meteor.startup(() => {

});
