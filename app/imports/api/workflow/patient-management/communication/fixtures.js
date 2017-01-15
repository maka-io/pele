import { Meteor } from 'meteor/meteor';
import { Communication } from './communication.js';

/**
 * If the Communication collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Communication.find().count() === 0) {
 *       const data = Assets.getText('communication.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Communication.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Communication
 * @member Fixtures
 */
Meteor.startup(() => {

});
