import { Meteor } from 'meteor/meteor';
import { DeviceComponent } from './device-component.js';

/**
 * If the DeviceComponent collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DeviceComponent.find().count() === 0) {
 *       const data = Assets.getText('device-component.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DeviceComponent.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DeviceComponent
 * @member Fixtures
 */
Meteor.startup(() => {

});
