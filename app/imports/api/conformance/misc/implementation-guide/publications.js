import { Meteor } from 'meteor/meteor';
import { ImplementationGuide } from './implementation-guide.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('implementation-guide.public', function implementationGuidePublic() {
 *       let cursor = ImplementationGuide.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ImplementationGuide.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ImplementationGuide
 * @member Publications
 */
Meteor.publish('implementation-guide.public', function implementationGuidePublic() {
    let cursor = ImplementationGuide.find({
        userId: { $exists: false },
    }, {
        fields: ImplementationGuide.publicFields
    });

    // return cursor;
});

Meteor.publish('implementation-guide.private', function implementationGuidePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ImplementationGuide.find({
        userId: this.userId,
    }, {
        fields: ImplementationGuide.privateFields,
    });

    // return cursor;
});
