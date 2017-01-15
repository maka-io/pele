import { Meteor } from 'meteor/meteor';
import { Group } from './group.js';

/**
 * If the Group collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Group.find().count() === 0) {
 *       const data = Assets.getText('group.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Group.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Group
 * @member Fixtures
 */
Meteor.startup(() => {

});
