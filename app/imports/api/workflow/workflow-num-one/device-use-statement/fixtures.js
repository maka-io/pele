import { Meteor } from 'meteor/meteor';
import { DeviceUseStatement } from './device-use-statement.js';

/**
 * If the DeviceUseStatement collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DeviceUseStatement.find().count() === 0) {
 *       const data = Assets.getText('device-use-statement.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DeviceUseStatement.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DeviceUseStatement
 * @member Fixtures
 */
Meteor.startup(() => {

});
