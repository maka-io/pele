import { Meteor } from 'meteor/meteor';
import { List } from './list.js';

/**
 * If the List collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (List.find().count() === 0) {
 *       const data = Assets.getText('list.json') || [ {} ];
 *       data.forEach((datum) => {
 *           List.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.List
 * @member Fixtures
 */
Meteor.startup(() => {

});
