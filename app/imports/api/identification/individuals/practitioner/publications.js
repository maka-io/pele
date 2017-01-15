import { Meteor } from 'meteor/meteor';
import { Practitioner } from './practitioner.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('practitioner.public', function practitionerPublic() {
 *       let cursor = Practitioner.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Practitioner.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Practitioner
 * @member Publications
 */
Meteor.publish('practitioner.public', function practitionerPublic() {
    let cursor = Practitioner.find({
        userId: { $exists: false },
    }, {
        fields: Practitioner.publicFields
    });

    // return cursor;
});

Meteor.publish('practitioner.private', function practitionerPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Practitioner.find({
        userId: this.userId,
    }, {
        fields: Practitioner.privateFields,
    });

    // return cursor;
});
