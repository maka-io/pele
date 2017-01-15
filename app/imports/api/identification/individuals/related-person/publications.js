import { Meteor } from 'meteor/meteor';
import { RelatedPerson } from './related-person.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('related-person.public', function relatedPersonPublic() {
 *       let cursor = RelatedPerson.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: RelatedPerson.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.RelatedPerson
 * @member Publications
 */
Meteor.publish('related-person.public', function relatedPersonPublic() {
    let cursor = RelatedPerson.find({
        userId: { $exists: false },
    }, {
        fields: RelatedPerson.publicFields
    });

    // return cursor;
});

Meteor.publish('related-person.private', function relatedPersonPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = RelatedPerson.find({
        userId: this.userId,
    }, {
        fields: RelatedPerson.privateFields,
    });

    // return cursor;
});
