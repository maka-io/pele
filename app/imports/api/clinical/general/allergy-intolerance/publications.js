import { Meteor } from 'meteor/meteor';
import { AllergyIntolerance } from './allergy-intolerance.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('allergy-intolerance.public', function allergyIntolerancePublic() {
 *       let cursor = AllergyIntolerance.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: AllergyIntolerance.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.AllergyIntolerance
 * @member Publications
 */
Meteor.publish('allergy-intolerance.public', function allergyIntolerancePublic() {
    let cursor = AllergyIntolerance.find({
        userId: { $exists: false },
    }, {
        fields: AllergyIntolerance.publicFields
    });

    // return cursor;
});

Meteor.publish('allergy-intolerance.private', function allergyIntolerancePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = AllergyIntolerance.find({
        userId: this.userId,
    }, {
        fields: AllergyIntolerance.privateFields,
    });

    // return cursor;
});
