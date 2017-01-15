import { Meteor } from 'meteor/meteor';
import { Procedure } from './procedure.js';

/**
 * If the Procedure collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Procedure.find().count() === 0) {
 *       const data = Assets.getText('procedure.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Procedure.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Procedure
 * @member Fixtures
 */
Meteor.startup(() => {

});
