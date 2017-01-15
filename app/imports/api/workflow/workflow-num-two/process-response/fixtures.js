import { Meteor } from 'meteor/meteor';
import { ProcessResponse } from './process-response.js';

/**
 * If the ProcessResponse collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ProcessResponse.find().count() === 0) {
 *       const data = Assets.getText('process-response.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ProcessResponse.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ProcessResponse
 * @member Fixtures
 */
Meteor.startup(() => {

});
