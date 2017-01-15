import { Meteor } from 'meteor/meteor';
import { RiskAssessment } from './risk-assessment.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('risk-assessment.public', function riskAssessmentPublic() {
 *       let cursor = RiskAssessment.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: RiskAssessment.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.RiskAssessment
 * @member Publications
 */
Meteor.publish('risk-assessment.public', function riskAssessmentPublic() {
    let cursor = RiskAssessment.find({
        userId: { $exists: false },
    }, {
        fields: RiskAssessment.publicFields
    });

    // return cursor;
});

Meteor.publish('risk-assessment.private', function riskAssessmentPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = RiskAssessment.find({
        userId: this.userId,
    }, {
        fields: RiskAssessment.privateFields,
    });

    // return cursor;
});
