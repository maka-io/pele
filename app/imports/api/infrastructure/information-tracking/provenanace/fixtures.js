import { Meteor } from 'meteor/meteor';
import { Provenanace } from './provenanace.js';

/**
 * If the Provenanace collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Provenanace.find().count() === 0) {
 *       const data = Assets.getText('provenanace.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Provenanace.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Provenanace
 * @member Fixtures
 */
Meteor.startup(() => {

});
