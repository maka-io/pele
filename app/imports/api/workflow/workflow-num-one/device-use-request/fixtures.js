import { Meteor } from 'meteor/meteor';
import { DeviceUseRequest } from './device-use-request.js';

/**
 * If the DeviceUseRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DeviceUseRequest.find().count() === 0) {
 *       const data = Assets.getText('device-use-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DeviceUseRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DeviceUseRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
