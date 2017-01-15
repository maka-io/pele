import { Meteor } from 'meteor/meteor';
import { RiskAssessment } from './risk-assessment.js';

/**
 * If the RiskAssessment collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (RiskAssessment.find().count() === 0) {
 *       const data = Assets.getText('risk-assessment.json') || [ {} ];
 *       data.forEach((datum) => {
 *           RiskAssessment.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.RiskAssessment
 * @member Fixtures
 */
Meteor.startup(() => {

});
