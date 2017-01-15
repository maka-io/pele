import { Meteor } from 'meteor/meteor';
import { ProcedureRequest } from './procedure-request.js';

/**
 * If the ProcedureRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ProcedureRequest.find().count() === 0) {
 *       const data = Assets.getText('procedure-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ProcedureRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ProcedureRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
