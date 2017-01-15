import { Meteor } from 'meteor/meteor';
import { Immunization } from './immunization.js';

/**
 * If the Immunization collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Immunization.find().count() === 0) {
 *       const data = Assets.getText('immunization.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Immunization.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Immunization
 * @member Fixtures
 */
Meteor.startup(() => {

});
