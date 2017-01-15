import { Meteor } from 'meteor/meteor';
import { DocumentManifest } from './document-manifest.js';

/**
 * If the DocumentManifest collection is empty on server start, and you'd like to
 * populate it with some data here is a handy spot.
 *
 * Example:
 * ```
 *   if (DocumentManifest.find().count() === 0) {
 *       const data = Assets.getText('document-manifest.json') || [ {} ];
 *       data.forEach((datum) => {
 *           DocumentManifest.insert(datum);
 *       });
 *   }
 *
 * ```
 * @memberof Server.DocumentManifest
 * @member Fixtures
 */
Meteor.startup(() => {

});
