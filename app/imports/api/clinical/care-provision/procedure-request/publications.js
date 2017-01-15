import { Meteor } from 'meteor/meteor';
import { ProcedureRequest } from './procedure-request.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('procedure-request.public', function procedureRequestPublic() {
 *       let cursor = ProcedureRequest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ProcedureRequest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ProcedureRequest
 * @member Publications
 */
Meteor.publish('procedure-request.public', function procedureRequestPublic() {
    let cursor = ProcedureRequest.find({
        userId: { $exists: false },
    }, {
        fields: ProcedureRequest.publicFields
    });

    // return cursor;
});

Meteor.publish('procedure-request.private', function procedureRequestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ProcedureRequest.find({
        userId: this.userId,
    }, {
        fields: ProcedureRequest.privateFields,
    });

    // return cursor;
});
