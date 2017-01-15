import { Meteor } from 'meteor/meteor';
import { Coverage } from './coverage.js';

/**
 * If the Coverage collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Coverage.find().count() === 0) {
 *       const data = Assets.getText('coverage.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Coverage.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Coverage
 * @member Fixtures
 */
Meteor.startup(() => {

});
