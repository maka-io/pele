import { Meteor } from 'meteor/meteor';
import { ClinicalImpression } from './clinical-impression.js';

/**
 * If the ClinicalImpression collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ClinicalImpression.find().count() === 0) {
 *       const data = Assets.getText('clinical-impression.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ClinicalImpression.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ClinicalImpression
 * @member Fixtures
 */
Meteor.startup(() => {

});
