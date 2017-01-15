import { Meteor } from 'meteor/meteor';
import { Immunization } from './immunization.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('immunization.public', function immunizationPublic() {
 *       let cursor = Immunization.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Immunization.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Immunization
 * @member Publications
 */
Meteor.publish('immunization.public', function immunizationPublic() {
    let cursor = Immunization.find({
        userId: { $exists: false },
    }, {
        fields: Immunization.publicFields
    });

    // return cursor;
});

Meteor.publish('immunization.private', function immunizationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Immunization.find({
        userId: this.userId,
    }, {
        fields: Immunization.privateFields,
    });

    // return cursor;
});
