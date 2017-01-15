import { Meteor } from 'meteor/meteor';
import { DiagnosticReport } from './diagnostic-report.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('diagnostic-report.public', function diagnosticReportPublic() {
 *       let cursor = DiagnosticReport.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DiagnosticReport.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DiagnosticReport
 * @member Publications
 */
Meteor.publish('diagnostic-report.public', function diagnosticReportPublic() {
    let cursor = DiagnosticReport.find({
        userId: { $exists: false },
    }, {
        fields: DiagnosticReport.publicFields
    });

    // return cursor;
});

Meteor.publish('diagnostic-report.private', function diagnosticReportPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DiagnosticReport.find({
        userId: this.userId,
    }, {
        fields: DiagnosticReport.privateFields,
    });

    // return cursor;
});
