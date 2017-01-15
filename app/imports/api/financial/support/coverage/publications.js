import { Meteor } from 'meteor/meteor';
import { Coverage } from './coverage.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('coverage.public', function coveragePublic() {
 *       let cursor = Coverage.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Coverage.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Coverage
 * @member Publications
 */
Meteor.publish('coverage.public', function coveragePublic() {
    let cursor = Coverage.find({
        userId: { $exists: false },
    }, {
        fields: Coverage.publicFields
    });

    // return cursor;
});

Meteor.publish('coverage.private', function coveragePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Coverage.find({
        userId: this.userId,
    }, {
        fields: Coverage.privateFields,
    });

    // return cursor;
});
