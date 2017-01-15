import { Meteor } from 'meteor/meteor';
import { Person } from './person.js';

/**
 * If the Person collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (Person.find().count() === 0) {
 *       const data = Assets.getText('person.json') || [ {} ];
 *       data.forEach((datum) => {
 *           Person.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.Person
 * @member Fixtures
 */
Meteor.startup(() => {

});
