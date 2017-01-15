import { Meteor } from 'meteor/meteor';
import { Procedure } from './procedure.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('procedure.public', function procedurePublic() {
 *       let cursor = Procedure.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Procedure.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Procedure
 * @member Publications
 */
Meteor.publish('procedure.public', function procedurePublic() {
    let cursor = Procedure.find({
        userId: { $exists: false },
    }, {
        fields: Procedure.publicFields
    });

    // return cursor;
});

Meteor.publish('procedure.private', function procedurePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Procedure.find({
        userId: this.userId,
    }, {
        fields: Procedure.privateFields,
    });

    // return cursor;
});
