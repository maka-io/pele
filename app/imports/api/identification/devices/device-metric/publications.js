import { Meteor } from 'meteor/meteor';
import { DeviceMetric } from './device-metric.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('device-metric.public', function deviceMetricPublic() {
 *       let cursor = DeviceMetric.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DeviceMetric.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DeviceMetric
 * @member Publications
 */
Meteor.publish('device-metric.public', function deviceMetricPublic() {
    let cursor = DeviceMetric.find({
        userId: { $exists: false },
    }, {
        fields: DeviceMetric.publicFields
    });

    // return cursor;
});

Meteor.publish('device-metric.private', function deviceMetricPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DeviceMetric.find({
        userId: this.userId,
    }, {
        fields: DeviceMetric.privateFields,
    });

    // return cursor;
});
