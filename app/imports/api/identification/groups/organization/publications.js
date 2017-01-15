import { Meteor } from 'meteor/meteor';
import { Organization } from './organization.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('organization.public', function organizationPublic() {
 *       let cursor = Organization.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Organization.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Organization
 * @member Publications
 */
Meteor.publish('organization.public', function organizationPublic() {
    let cursor = Organization.find({
        userId: { $exists: false },
    }, {
        fields: Organization.publicFields
    });

    // return cursor;
});

Meteor.publish('organization.private', function organizationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Organization.find({
        userId: this.userId,
    }, {
        fields: Organization.privateFields,
    });

    // return cursor;
});
