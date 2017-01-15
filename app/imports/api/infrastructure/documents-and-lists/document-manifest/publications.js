import { Meteor } from 'meteor/meteor';
import { DocumentManifest } from './document-manifest.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('document-manifest.public', function documentManifestPublic() {
 *       let cursor = DocumentManifest.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DocumentManifest.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DocumentManifest
 * @member Publications
 */
Meteor.publish('document-manifest.public', function documentManifestPublic() {
    let cursor = DocumentManifest.find({
        userId: { $exists: false },
    }, {
        fields: DocumentManifest.publicFields
    });

    // return cursor;
});

Meteor.publish('document-manifest.private', function documentManifestPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DocumentManifest.find({
        userId: this.userId,
    }, {
        fields: DocumentManifest.privateFields,
    });

    // return cursor;
});
