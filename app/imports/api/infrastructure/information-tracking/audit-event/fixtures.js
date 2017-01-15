import { Meteor } from 'meteor/meteor';
import { AuditEvent } from './audit-event.js';

/**
 * If the AuditEvent collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (AuditEvent.find().count() === 0) {
 *       const data = Assets.getText('audit-event.json') || [ {} ];
 *       data.forEach((datum) => {
 *           AuditEvent.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.AuditEvent
 * @member Fixtures
 */
Meteor.startup(() => {

});
