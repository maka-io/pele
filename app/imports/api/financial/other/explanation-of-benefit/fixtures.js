import { Meteor } from 'meteor/meteor';
import { ExplanationOfBenefit } from './explanation-of-benefit.js';

/**
 * If the ExplanationOfBenefit collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ExplanationOfBenefit.find().count() === 0) {
 *       const data = Assets.getText('explanation-of-benefit.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ExplanationOfBenefit.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ExplanationOfBenefit
 * @member Fixtures
 */
Meteor.startup(() => {

});
