import { Meteor } from 'meteor/meteor';
import { ImagingStudy } from './imaging-study.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('imaging-study.public', function imagingStudyPublic() {
 *       let cursor = ImagingStudy.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ImagingStudy.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ImagingStudy
 * @member Publications
 */
Meteor.publish('imaging-study.public', function imagingStudyPublic() {
    let cursor = ImagingStudy.find({
        userId: { $exists: false },
    }, {
        fields: ImagingStudy.publicFields
    });

    // return cursor;
});

Meteor.publish('imaging-study.private', function imagingStudyPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ImagingStudy.find({
        userId: this.userId,
    }, {
        fields: ImagingStudy.privateFields,
    });

    // return cursor;
});
