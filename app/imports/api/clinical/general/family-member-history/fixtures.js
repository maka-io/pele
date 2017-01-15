import { Meteor } from 'meteor/meteor';
import { FamilyMemberHistory } from './family-member-history.js';

/**
 * If the FamilyMemberHistory collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (FamilyMemberHistory.find().count() === 0) {
 *       const data = Assets.getText('family-member-history.json') || [ {} ];
 *       data.forEach((datum) => {
 *           FamilyMemberHistory.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.FamilyMemberHistory
 * @member Fixtures
 */
Meteor.startup(() => {

});
