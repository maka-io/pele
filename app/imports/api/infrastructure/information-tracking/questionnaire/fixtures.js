import { Meteor } from 'meteor/meteor';
import { Questionnaire } from './questionnaire.js';

/**
 * If the Questionnaire collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Questionnaire.find().count() === 0) {
 *       const data = Assets.getText('questionnaire.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Questionnaire.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Questionnaire
 * @member Fixtures
 */
Meteor.startup(() => {

});
