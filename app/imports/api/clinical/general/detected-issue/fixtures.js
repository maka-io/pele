import { Meteor } from 'meteor/meteor';
import { DetectedIssue } from './detected-issue.js';

/**
 * If the DetectedIssue collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DetectedIssue.find().count() === 0) {
 *       const data = Assets.getText('detected-issue.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DetectedIssue.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DetectedIssue
 * @member Fixtures
 */
Meteor.startup(() => {

});
