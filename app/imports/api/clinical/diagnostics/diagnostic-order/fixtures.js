import { Meteor } from 'meteor/meteor';
import { DiagnosticOrder } from './diagnostic-order.js';

/**
 * If the DiagnosticOrder collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DiagnosticOrder.find().count() === 0) {
 *       const data = Assets.getText('diagnostic-order.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DiagnosticOrder.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DiagnosticOrder
 * @member Fixtures
 */
Meteor.startup(() => {

});
