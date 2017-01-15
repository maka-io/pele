import { Meteor } from 'meteor/meteor';
import { DocumentReference } from './document-reference.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('document-reference.public', function documentReferencePublic() {
 *       let cursor = DocumentReference.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DocumentReference.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DocumentReference
 * @member Publications
 */
Meteor.publish('document-reference.public', function documentReferencePublic() {
    let cursor = DocumentReference.find({
        userId: { $exists: false },
    }, {
        fields: DocumentReference.publicFields
    });

    // return cursor;
});

Meteor.publish('document-reference.private', function documentReferencePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DocumentReference.find({
        userId: this.userId,
    }, {
        fields: DocumentReference.privateFields,
    });

    // return cursor;
});
