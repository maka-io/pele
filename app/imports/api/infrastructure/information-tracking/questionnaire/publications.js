import { Meteor } from 'meteor/meteor';
import { Questionnaire } from './questionnaire.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('questionnaire.public', function questionnairePublic() {
 *       let cursor = Questionnaire.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Questionnaire.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Questionnaire
 * @member Publications
 */
Meteor.publish('questionnaire.public', function questionnairePublic() {
    let cursor = Questionnaire.find({
        userId: { $exists: false },
    }, {
        fields: Questionnaire.publicFields
    });

    // return cursor;
});

Meteor.publish('questionnaire.private', function questionnairePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Questionnaire.find({
        userId: this.userId,
    }, {
        fields: Questionnaire.privateFields,
    });

    // return cursor;
});
