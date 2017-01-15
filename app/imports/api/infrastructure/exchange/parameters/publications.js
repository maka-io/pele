import { Meteor } from 'meteor/meteor';
import { Parameters } from './parameters.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('parameters.public', function parametersPublic() {
 *       let cursor = Parameters.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Parameters.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Parameters
 * @member Publications
 */
Meteor.publish('parameters.public', function parametersPublic() {
    let cursor = Parameters.find({
        userId: { $exists: false },
    }, {
        fields: Parameters.publicFields
    });

    // return cursor;
});

Meteor.publish('parameters.private', function parametersPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Parameters.find({
        userId: this.userId,
    }, {
        fields: Parameters.privateFields,
    });

    // return cursor;
});
