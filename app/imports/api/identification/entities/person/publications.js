import { Meteor } from 'meteor/meteor';
import { Person } from './person.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('person.public', function personPublic() {
 *       let cursor = Person.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: Person.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.Person
 * @member Publications
 */
Meteor.publish('person.public', function personPublic() {
    let cursor = Person.find({
        userId: { $exists: false },
    }, {
        fields: Person.publicFields
    });

    // return cursor;
});

Meteor.publish('person.private', function personPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = Person.find({
        userId: this.userId,
    }, {
        fields: Person.privateFields,
    });

    // return cursor;
});
