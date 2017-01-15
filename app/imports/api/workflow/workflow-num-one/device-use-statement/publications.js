import { Meteor } from 'meteor/meteor';
import { DeviceUseStatement } from './device-use-statement.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('device-use-statement.public', function deviceUseStatementPublic() {
 *       let cursor = DeviceUseStatement.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DeviceUseStatement.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DeviceUseStatement
 * @member Publications
 */
Meteor.publish('device-use-statement.public', function deviceUseStatementPublic() {
    let cursor = DeviceUseStatement.find({
        userId: { $exists: false },
    }, {
        fields: DeviceUseStatement.publicFields
    });

    // return cursor;
});

Meteor.publish('device-use-statement.private', function deviceUseStatementPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DeviceUseStatement.find({
        userId: this.userId,
    }, {
        fields: DeviceUseStatement.privateFields,
    });

    // return cursor;
});
