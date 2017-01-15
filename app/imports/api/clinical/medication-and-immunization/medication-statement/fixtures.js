import { Meteor } from 'meteor/meteor';
import { MedicationStatement } from './medication-statement.js';

/**
 * If the MedicationStatement collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (MedicationStatement.find().count() === 0) {
 *       const data = Assets.getText('medication-statement.json') || [ {} ];
 *       data.forEach((datum) => {
 *           MedicationStatement.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.MedicationStatement
 * @member Fixtures
 */
Meteor.startup(() => {

});
