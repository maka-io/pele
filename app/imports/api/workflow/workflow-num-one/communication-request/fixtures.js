import { Meteor } from 'meteor/meteor';
import { CommunicationRequest } from './communication-request.js';

/**
 * If the CommunicationRequest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (CommunicationRequest.find().count() === 0) {
 *       const data = Assets.getText('communication-request.json') || [ {} ];
 *       data.forEach((datum) => {
 *           CommunicationRequest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.CommunicationRequest
 * @member Fixtures
 */
Meteor.startup(() => {

});
