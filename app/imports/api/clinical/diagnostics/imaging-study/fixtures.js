import { Meteor } from 'meteor/meteor';
import { ImagingStudy } from './imaging-study.js';

/**
 * If the ImagingStudy collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (ImagingStudy.find().count() === 0) {
 *       const data = Assets.getText('imaging-study.json') || [ {} ];
 *       data.forEach((datum) => {
 *           ImagingStudy.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.ImagingStudy
 * @member Fixtures
 */
Meteor.startup(() => {

});
