import { Meteor } from 'meteor/meteor';
import { ValueSet } from './value-set.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('value-set.public', function valueSetPublic() {
 *       let cursor = ValueSet.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ValueSet.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ValueSet
 * @member Publications
 */
Meteor.publish('value-set.public', function valueSetPublic() {
    let cursor = ValueSet.find({
        userId: { $exists: false },
    }, {
        fields: ValueSet.publicFields
    });

    // return cursor;
});

Meteor.publish('value-set.private', function valueSetPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ValueSet.find({
        userId: this.userId,
    }, {
        fields: ValueSet.privateFields,
    });

    // return cursor;
});
