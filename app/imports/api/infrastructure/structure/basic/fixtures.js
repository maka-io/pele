import { Meteor } from 'meteor/meteor';
import { Basic } from './basic.js';

/**
 * If the Basic collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Basic.find().count() === 0) {
 *       const data = Assets.getText('basic.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Basic.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Basic
 * @member Fixtures
 */
Meteor.startup(() => {

});
