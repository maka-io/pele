import { Meteor } from 'meteor/meteor';
import { ExplanationOfBenefit } from './explanation-of-benefit.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('explanation-of-benefit.public', function explanationOfBenefitPublic() {
 *       let cursor = ExplanationOfBenefit.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ExplanationOfBenefit.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ExplanationOfBenefit
 * @member Publications
 */
Meteor.publish('explanation-of-benefit.public', function explanationOfBenefitPublic() {
    let cursor = ExplanationOfBenefit.find({
        userId: { $exists: false },
    }, {
        fields: ExplanationOfBenefit.publicFields
    });

    // return cursor;
});

Meteor.publish('explanation-of-benefit.private', function explanationOfBenefitPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ExplanationOfBenefit.find({
        userId: this.userId,
    }, {
        fields: ExplanationOfBenefit.privateFields,
    });

    // return cursor;
});
