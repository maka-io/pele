import { Meteor } from 'meteor/meteor';
import { EpisodeOfCare } from './episode-of-care.js';

/**
 * If the EpisodeOfCare collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (EpisodeOfCare.find().count() === 0) {
 *       const data = Assets.getText('episode-of-care.json') || [ {} ];
 *       data.forEach((datum) => {
 *           EpisodeOfCare.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.EpisodeOfCare
 * @member Fixtures
 */
Meteor.startup(() => {

});
