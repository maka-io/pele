import { Meteor } from 'meteor/meteor';
import { OperationDefinition } from './operation-definition.js';

/**
 * If the OperationDefinition collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (OperationDefinition.find().count() === 0) {
 *       const data = Assets.getText('operation-definition.json') || [ {} ];
 *       data.forEach((datum) => {
 *           OperationDefinition.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.OperationDefinition
 * @member Fixtures
 */
Meteor.startup(() => {

});
