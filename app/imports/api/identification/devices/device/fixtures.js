import { Meteor } from 'meteor/meteor';
import { Device } from './device.js';

/**
 * If the Device collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Device.find().count() === 0) {
 *       const data = Assets.getText('device.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Device.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Device
 * @member Fixtures
 */
Meteor.startup(() => {

});
