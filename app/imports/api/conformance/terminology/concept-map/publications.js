import { Meteor } from 'meteor/meteor';
import { ConceptMap } from './concept-map.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('concept-map.public', function conceptMapPublic() {
 *       let cursor = ConceptMap.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ConceptMap.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ConceptMap
 * @member Publications
 */
Meteor.publish('concept-map.public', function conceptMapPublic() {
    let cursor = ConceptMap.find({
        userId: { $exists: false },
    }, {
        fields: ConceptMap.publicFields
    });

    // return cursor;
});

Meteor.publish('concept-map.private', function conceptMapPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ConceptMap.find({
        userId: this.userId,
    }, {
        fields: ConceptMap.privateFields,
    });

    // return cursor;
});
