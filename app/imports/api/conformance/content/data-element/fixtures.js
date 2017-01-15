import { Meteor } from 'meteor/meteor';
import { DataElement } from './data-element.js';

/**
 * If the DataElement collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DataElement.find().count() === 0) {
 *       const data = Assets.getText('data-element.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DataElement.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DataElement
 * @member Fixtures
 */
Meteor.startup(() => {

});
