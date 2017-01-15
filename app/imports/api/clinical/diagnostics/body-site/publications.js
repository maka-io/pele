import { Meteor } from 'meteor/meteor';
import { BodySite } from './body-site.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('body-site.public', function bodySitePublic() {
 *       let cursor = BodySite.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: BodySite.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.BodySite
 * @member Publications
 */
Meteor.publish('body-site.public', function bodySitePublic() {
    let cursor = BodySite.find({
        userId: { $exists: false },
    }, {
        fields: BodySite.publicFields
    });

    // return cursor;
});

Meteor.publish('body-site.private', function bodySitePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = BodySite.find({
        userId: this.userId,
    }, {
        fields: BodySite.privateFields,
    });

    // return cursor;
});
