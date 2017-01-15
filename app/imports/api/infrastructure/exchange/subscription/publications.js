import { Meteor } from 'meteor/meteor';
import { Subscription } from './subscription.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('subscription.public', function subscriptionPublic() {
 *       let cursor = Subscription.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Subscription.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Subscription
 * @member Publications
 */
Meteor.publish('subscription.public', function subscriptionPublic() {
    let cursor = Subscription.find({
        userId: { $exists: false },
    }, {
        fields: Subscription.publicFields
    });

    // return cursor;
});

Meteor.publish('subscription.private', function subscriptionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Subscription.find({
        userId: this.userId,
    }, {
        fields: Subscription.privateFields,
    });

    // return cursor;
});
