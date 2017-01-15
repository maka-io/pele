import { Meteor } from 'meteor/meteor';
import { VisionPrescription } from './vision-prescription.js';

/**
 * If the VisionPrescription collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (VisionPrescription.find().count() === 0) {
 *       const data = Assets.getText('vision-prescription.json') || [ {} ];
 *       data.forEach((datum) => {
 *           VisionPrescription.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.VisionPrescription
 * @member Fixtures
 */
Meteor.startup(() => {

});
