import { Meteor } from 'meteor/meteor';
import { DataElement } from './data-element.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('data-element.public', function dataElementPublic() {
 *       let cursor = DataElement.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: DataElement.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.DataElement
 * @member Publications
 */
Meteor.publish('data-element.public', function dataElementPublic() {
    let cursor = DataElement.find({
        userId: { $exists: false },
    }, {
        fields: DataElement.publicFields
    });

    // return cursor;
});

Meteor.publish('data-element.private', function dataElementPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = DataElement.find({
        userId: this.userId,
    }, {
        fields: DataElement.privateFields,
    });

    // return cursor;
});
