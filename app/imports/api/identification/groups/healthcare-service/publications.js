import { Meteor } from 'meteor/meteor';
import { HealthcareService } from './healthcare-service.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('healthcare-service.public', function healthcareServicePublic() {
 *       let cursor = HealthcareService.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: HealthcareService.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.HealthcareService
 * @member Publications
 */
Meteor.publish('healthcare-service.public', function healthcareServicePublic() {
    let cursor = HealthcareService.find({
        userId: { $exists: false },
    }, {
        fields: HealthcareService.publicFields
    });

    // return cursor;
});

Meteor.publish('healthcare-service.private', function healthcareServicePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = HealthcareService.find({
        userId: this.userId,
    }, {
        fields: HealthcareService.privateFields,
    });

    // return cursor;
});
