import { Meteor } from 'meteor/meteor';
import { OperationOutcome } from './operation-outcome.js';

/**
 * If the OperationOutcome collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (OperationOutcome.find().count() === 0) {
 *       const data = Assets.getText('operation-outcome.json') || [ {} ];
 *       data.forEach((datum) => {
 *           OperationOutcome.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.OperationOutcome
 * @member Fixtures
 */
Meteor.startup(() => {

});
