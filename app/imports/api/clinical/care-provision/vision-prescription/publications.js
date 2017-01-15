import { Meteor } from 'meteor/meteor';
import { VisionPrescription } from './vision-prescription.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('vision-prescription.public', function visionPrescriptionPublic() {
 *       let cursor = VisionPrescription.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: VisionPrescription.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.VisionPrescription
 * @member Publications
 */
Meteor.publish('vision-prescription.public', function visionPrescriptionPublic() {
    let cursor = VisionPrescription.find({
        userId: { $exists: false },
    }, {
        fields: VisionPrescription.publicFields
    });

    // return cursor;
});

Meteor.publish('vision-prescription.private', function visionPrescriptionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = VisionPrescription.find({
        userId: this.userId,
    }, {
        fields: VisionPrescription.privateFields,
    });

    // return cursor;
});
