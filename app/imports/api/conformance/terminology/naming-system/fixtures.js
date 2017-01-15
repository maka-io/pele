import { Meteor } from 'meteor/meteor';
import { NamingSystem } from './naming-system.js';

/**
 * If the NamingSystem collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (NamingSystem.find().count() === 0) {
 *       const data = Assets.getText('naming-system.json') || [ {} ];
 *       data.forEach((datum) => {
 *           NamingSystem.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.NamingSystem
 * @member Fixtures
 */
Meteor.startup(() => {

});
