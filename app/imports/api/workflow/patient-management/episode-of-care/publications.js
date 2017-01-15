import { Meteor } from 'meteor/meteor';
import { EpisodeOfCare } from './episode-of-care.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('episode-of-care.public', function episodeOfCarePublic() {
 *       let cursor = EpisodeOfCare.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: EpisodeOfCare.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.EpisodeOfCare
 * @member Publications
 */
Meteor.publish('episode-of-care.public', function episodeOfCarePublic() {
    let cursor = EpisodeOfCare.find({
        userId: { $exists: false },
    }, {
        fields: EpisodeOfCare.publicFields
    });

    // return cursor;
});

Meteor.publish('episode-of-care.private', function episodeOfCarePrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = EpisodeOfCare.find({
        userId: this.userId,
    }, {
        fields: EpisodeOfCare.privateFields,
    });

    // return cursor;
});
