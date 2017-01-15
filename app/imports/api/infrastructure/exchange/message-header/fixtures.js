import { Meteor } from 'meteor/meteor';
import { MessageHeader } from './message-header.js';

/**
 * If the MessageHeader collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (MessageHeader.find().count() === 0) {
 *       const data = Assets.getText('message-header.json') || [ {} ];
 *       data.forEach((datum) => {
 *           MessageHeader.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.MessageHeader
 * @member Fixtures
 */
Meteor.startup(() => {

});
