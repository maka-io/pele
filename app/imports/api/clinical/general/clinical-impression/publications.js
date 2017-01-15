import { Meteor } from 'meteor/meteor';
import { ClinicalImpression } from './clinical-impression.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('clinical-impression.public', function clinicalImpressionPublic() {
 *       let cursor = ClinicalImpression.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ClinicalImpression.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ClinicalImpression
 * @member Publications
 */
Meteor.publish('clinical-impression.public', function clinicalImpressionPublic() {
    let cursor = ClinicalImpression.find({
        userId: { $exists: false },
    }, {
        fields: ClinicalImpression.publicFields
    });

    // return cursor;
});

Meteor.publish('clinical-impression.private', function clinicalImpressionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ClinicalImpression.find({
        userId: this.userId,
    }, {
        fields: ClinicalImpression.privateFields,
    });

    // return cursor;
});
