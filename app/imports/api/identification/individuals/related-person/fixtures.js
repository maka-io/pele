import { Meteor } from 'meteor/meteor';
import { RelatedPerson } from './related-person.js';

/**
 * If the RelatedPerson collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (RelatedPerson.find().count() === 0) {
 *       const data = Assets.getText('related-person.json') || [ {} ];
 *       data.forEach((datum) => {
 *           RelatedPerson.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.RelatedPerson
 * @member Fixtures
 */
Meteor.startup(() => {

});
