import { Meteor } from 'meteor/meteor';
import { DocumentReference } from './document-reference.js';

/**
 * If the DocumentReference collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DocumentReference.find().count() === 0) {
 *       const data = Assets.getText('document-reference.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DocumentReference.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DocumentReference
 * @member Fixtures
 */
Meteor.startup(() => {

});
