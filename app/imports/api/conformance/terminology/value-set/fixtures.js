import { Meteor } from 'meteor/meteor';
import { ValueSet } from './value-set.js';

/**
 * If the ValueSet collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ValueSet.find().count() === 0) {
 *       const data = Assets.getText('value-set.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ValueSet.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ValueSet
 * @member Fixtures
 */
Meteor.startup(() => {

});
