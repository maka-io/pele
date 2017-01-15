import { Meteor } from 'meteor/meteor';
import { ImplementationGuide } from './implementation-guide.js';

/**
 * If the ImplementationGuide collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ImplementationGuide.find().count() === 0) {
 *       const data = Assets.getText('implementation-guide.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ImplementationGuide.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ImplementationGuide
 * @member Fixtures
 */
Meteor.startup(() => {

});
