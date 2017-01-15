import { Meteor } from 'meteor/meteor';
import { QuestionnaireResponse } from './questionnaire-response.js';

/**
 * If the QuestionnaireResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (QuestionnaireResponse.find().count() === 0) {
 *       const data = Assets.getText('questionnaire-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           QuestionnaireResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.QuestionnaireResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
