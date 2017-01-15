import { Meteor } from 'meteor/meteor';
import { TestScript } from './test-script.js';

/**
 * If the TestScript collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (TestScript.find().count() === 0) {
 *       const data = Assets.getText('test-script.json') || [ {} ];
 *       data.forEach((datum) => {
 *           TestScript.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.TestScript
 * @member Fixtures
 */
Meteor.startup(() => {

});
