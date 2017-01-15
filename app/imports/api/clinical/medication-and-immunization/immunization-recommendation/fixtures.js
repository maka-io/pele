import { Meteor } from 'meteor/meteor';
import { ImmunizationRecommendation } from './immunization-recommendation.js';

/**
 * If the ImmunizationRecommendation collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ImmunizationRecommendation.find().count() === 0) {
 *       const data = Assets.getText('immunization-recommendation.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ImmunizationRecommendation.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ImmunizationRecommendation
 * @member Fixtures
 */
Meteor.startup(() => {

});
