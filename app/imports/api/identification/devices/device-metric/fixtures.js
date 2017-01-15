import { Meteor } from 'meteor/meteor';
import { DeviceMetric } from './device-metric.js';

/**
 * If the DeviceMetric collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DeviceMetric.find().count() === 0) {
 *       const data = Assets.getText('device-metric.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DeviceMetric.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DeviceMetric
 * @member Fixtures
 */
Meteor.startup(() => {

});
