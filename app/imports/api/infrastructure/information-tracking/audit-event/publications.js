import { Meteor } from 'meteor/meteor';
import { AuditEvent } from './audit-event.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('audit-event.public', function auditEventPublic() {
 *       let cursor = AuditEvent.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: AuditEvent.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.AuditEvent
 * @member Publications
 */
Meteor.publish('audit-event.public', function auditEventPublic() {
    let cursor = AuditEvent.find({
        userId: { $exists: false },
    }, {
        fields: AuditEvent.publicFields
    });

    // return cursor;
});

Meteor.publish('audit-event.private', function auditEventPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = AuditEvent.find({
        userId: this.userId,
    }, {
        fields: AuditEvent.privateFields,
    });

    // return cursor;
});
