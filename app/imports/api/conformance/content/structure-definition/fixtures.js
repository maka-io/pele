import { Meteor } from 'meteor/meteor';
import { StructureDefinition } from './structure-definition.js';

/**
 * If the StructureDefinition collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (StructureDefinition.find().count() === 0) {
 *       const data = Assets.getText('structure-definition.json') || [ {} ];
 *       data.forEach((datum) => {
 *           StructureDefinition.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.StructureDefinition
 * @member Fixtures
 */
Meteor.startup(() => {

});
