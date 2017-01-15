import { Meteor } from 'meteor/meteor';
import { QuestionnaireResponse } from './questionnaire-response.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('questionnaire-response.public', function questionnaireResponsePublic() {
 *       let cursor = QuestionnaireResponse.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: QuestionnaireResponse.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.QuestionnaireResponse
 * @member Publications
 */
Meteor.publish('questionnaire-response.public', function questionnaireResponsePublic() {
    let cursor = QuestionnaireResponse.find({
        userId: { $exists: false },
    }, {
        fields: QuestionnaireResponse.publicFields
    });

    // return cursor;
});

Meteor.publish('questionnaire-response.private', function questionnaireResponsePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = QuestionnaireResponse.find({
        userId: this.userId,
    }, {
        fields: QuestionnaireResponse.privateFields,
    });

    // return cursor;
});
