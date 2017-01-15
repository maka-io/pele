import { Meteor } from 'meteor/meteor';
import { SearchParameter } from './search-parameter.js';

/**
 * If the SearchParameter collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (SearchParameter.find().count() === 0) {
 *       const data = Assets.getText('search-parameter.json') || [ {} ];
 *       data.forEach((datum) => {
 *           SearchParameter.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.SearchParameter
 * @member Fixtures
 */
Meteor.startup(() => {

});
