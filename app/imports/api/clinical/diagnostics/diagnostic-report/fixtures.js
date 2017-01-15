import { Meteor } from 'meteor/meteor';
import { DiagnosticReport } from './diagnostic-report.js';

/**
 * If the DiagnosticReport collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DiagnosticReport.find().count() === 0) {
 *       const data = Assets.getText('diagnostic-report.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DiagnosticReport.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DiagnosticReport
 * @member Fixtures
 */
Meteor.startup(() => {

});
