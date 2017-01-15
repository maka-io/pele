import { Meteor } from 'meteor/meteor';
import { AllergyIntolerance } from './allergy-intolerance.js';

/**
 * If the AllergyIntolerance collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (AllergyIntolerance.find().count() === 0) {
 *       const data = Assets.getText('allergy-intolerance.json') || [ {} ];
 *       data.forEach((datum) => {
 *           AllergyIntolerance.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.AllergyIntolerance
 * @member Fixtures
 */
Meteor.startup(() => {

});
