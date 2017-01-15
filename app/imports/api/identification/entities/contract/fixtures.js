import { Meteor } from 'meteor/meteor';
import { Contract } from './contract.js';

/**
 * If the Contract collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Contract.find().count() === 0) {
 *       const data = Assets.getText('contract.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Contract.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Contract
 * @member Fixtures
 */
Meteor.startup(() => {

});
