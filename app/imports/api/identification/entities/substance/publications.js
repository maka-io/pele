import { Meteor } from 'meteor/meteor';
import { Substance } from './substance.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('substance.public', function substancePublic() {
 *       let cursor = Substance.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Substance.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Substance
 * @member Publications
 */
Meteor.publish('substance.public', function substancePublic() {
    let cursor = Substance.find({
        userId: { $exists: false },
    }, {
        fields: Substance.publicFields
    });

    // return cursor;
});

Meteor.publish('substance.private', function substancePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Substance.find({
        userId: this.userId,
    }, {
        fields: Substance.privateFields,
    });

    // return cursor;
});
