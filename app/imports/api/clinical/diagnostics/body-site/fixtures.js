import { Meteor } from 'meteor/meteor';
import { BodySite } from './body-site.js';

/**
 * If the BodySite collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (BodySite.find().count() === 0) {
 *       const data = Assets.getText('body-site.json') || [ {} ];
 *       data.forEach((datum) => {
 *           BodySite.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.BodySite
 * @member Fixtures
 */
Meteor.startup(() => {

});
