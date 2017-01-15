import { Meteor } from 'meteor/meteor';
import { HealthcareService } from './healthcare-service.js';

/**
 * If the HealthcareService collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (HealthcareService.find().count() === 0) {
 *       const data = Assets.getText('healthcare-service.json') || [ {} ];
 *       data.forEach((datum) => {
 *           HealthcareService.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.HealthcareService
 * @member Fixtures
 */
Meteor.startup(() => {

});
