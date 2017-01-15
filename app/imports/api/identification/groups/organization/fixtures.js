import { Meteor } from 'meteor/meteor';
import { Organization } from './organization.js';

/**
 * If the Organization collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Organization.find().count() === 0) {
 *       const data = Assets.getText('organization.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Organization.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Organization
 * @member Fixtures
 */
Meteor.startup(() => {

});
