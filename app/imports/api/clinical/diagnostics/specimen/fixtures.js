import { Meteor } from 'meteor/meteor';
import { Specimen } from './specimen.js';

/**
 * If the Specimen collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Specimen.find().count() === 0) {
 *       const data = Assets.getText('specimen.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Specimen.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Specimen
 * @member Fixtures
 */
Meteor.startup(() => {

});
