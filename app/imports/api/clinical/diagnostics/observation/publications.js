import { Meteor } from 'meteor/meteor';
import { Observation } from './observation.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('observation.public', function observationPublic() {
 *       let cursor = Observation.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Observation.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Observation
 * @member Publications
 */
Meteor.publish('observation.public', function observationPublic() {
    let cursor = Observation.find({
        userId: { $exists: false },
    }, {
        fields: Observation.publicFields
    });

    // return cursor;
});

Meteor.publish('observation.private', function observationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Observation.find({
        userId: this.userId,
    }, {
        fields: Observation.privateFields,
    });

    // return cursor;
});
