import { Meteor } from 'meteor/meteor';
import { Specimen } from './specimen.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('specimen.public', function specimenPublic() {
 *       let cursor = Specimen.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Specimen.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Specimen
 * @member Publications
 */
Meteor.publish('specimen.public', function specimenPublic() {
    let cursor = Specimen.find({
        userId: { $exists: false },
    }, {
        fields: Specimen.publicFields
    });

    // return cursor;
});

Meteor.publish('specimen.private', function specimenPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Specimen.find({
        userId: this.userId,
    }, {
        fields: Specimen.privateFields,
    });

    // return cursor;
});
