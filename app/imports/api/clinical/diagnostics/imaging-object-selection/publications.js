import { Meteor } from 'meteor/meteor';
import { ImagingObjectSelection } from './imaging-object-selection.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('imaging-object-selection.public', function imagingObjectSelectionPublic() {
 *       let cursor = ImagingObjectSelection.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ImagingObjectSelection.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ImagingObjectSelection
 * @member Publications
 */
Meteor.publish('imaging-object-selection.public', function imagingObjectSelectionPublic() {
    let cursor = ImagingObjectSelection.find({
        userId: { $exists: false },
    }, {
        fields: ImagingObjectSelection.publicFields
    });

    // return cursor;
});

Meteor.publish('imaging-object-selection.private', function imagingObjectSelectionPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ImagingObjectSelection.find({
        userId: this.userId,
    }, {
        fields: ImagingObjectSelection.privateFields,
    });

    // return cursor;
});
