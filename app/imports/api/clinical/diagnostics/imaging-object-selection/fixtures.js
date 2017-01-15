import { Meteor } from 'meteor/meteor';
import { ImagingObjectSelection } from './imaging-object-selection.js';

/**
 * If the ImagingObjectSelection collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ImagingObjectSelection.find().count() === 0) {
 *       const data = Assets.getText('imaging-object-selection.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ImagingObjectSelection.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ImagingObjectSelection
 * @member Fixtures
 */
Meteor.startup(() => {

});
