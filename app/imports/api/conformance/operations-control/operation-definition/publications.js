import { Meteor } from 'meteor/meteor';
import { OperationDefinition } from './operation-definition.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('operation-definition.public', function operationDefinitionPublic() {
 *       let cursor = OperationDefinition.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: OperationDefinition.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.OperationDefinition
 * @member Publications
 */
Meteor.publish('operation-definition.public', function operationDefinitionPublic() {
    let cursor = OperationDefinition.find({
        userId: { $exists: false },
    }, {
        fields: OperationDefinition.publicFields
    });

    // return cursor;
});

Meteor.publish('operation-definition.private', function operationDefinitionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = OperationDefinition.find({
        userId: this.userId,
    }, {
        fields: OperationDefinition.privateFields,
    });

    // return cursor;
});
