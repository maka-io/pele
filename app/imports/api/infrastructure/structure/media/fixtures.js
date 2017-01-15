import { Meteor } from 'meteor/meteor';
import { Media } from './media.js';

/**
 * If the Media collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Media.find().count() === 0) {
 *       const data = Assets.getText('media.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Media.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Media
 * @member Fixtures
 */
Meteor.startup(() => {

});
