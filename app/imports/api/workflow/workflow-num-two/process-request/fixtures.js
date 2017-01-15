import { Meteor } from 'meteor/meteor';
import { ProcessRequest } from './process-request.js';

/**
 * If the ProcessRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ProcessRequest.find().count() === 0) {
 *       const data = Assets.getText('process-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ProcessRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ProcessRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
