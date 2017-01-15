import { Meteor } from 'meteor/meteor';
import { StructureDefinition } from './structure-definition.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('structure-definition.public', function structureDefinitionPublic() {
 *       let cursor = StructureDefinition.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: StructureDefinition.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.StructureDefinition
 * @member Publications
 */
Meteor.publish('structure-definition.public', function structureDefinitionPublic() {
    let cursor = StructureDefinition.find({
        userId: { $exists: false },
    }, {
        fields: StructureDefinition.publicFields
    });

    // return cursor;
});

Meteor.publish('structure-definition.private', function structureDefinitionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = StructureDefinition.find({
        userId: this.userId,
    }, {
        fields: StructureDefinition.privateFields,
    });

    // return cursor;
});
