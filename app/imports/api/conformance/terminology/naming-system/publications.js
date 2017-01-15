import { Meteor } from 'meteor/meteor';
import { NamingSystem } from './naming-system.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('naming-system.public', function namingSystemPublic() {
 *       let cursor = NamingSystem.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: NamingSystem.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.NamingSystem
 * @member Publications
 */
Meteor.publish('naming-system.public', function namingSystemPublic() {
    let cursor = NamingSystem.find({
        userId: { $exists: false },
    }, {
        fields: NamingSystem.publicFields
    });

    // return cursor;
});

Meteor.publish('naming-system.private', function namingSystemPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = NamingSystem.find({
        userId: this.userId,
    }, {
        fields: NamingSystem.privateFields,
    });

    // return cursor;
});
