import { Meteor } from 'meteor/meteor';
import { ImmunizationRecommendation } from './immunization-recommendation.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('immunization-recommendation.public', function immunizationRecommendationPublic() {
 *       let cursor = ImmunizationRecommendation.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: ImmunizationRecommendation.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.ImmunizationRecommendation
 * @member Publications
 */
Meteor.publish('immunization-recommendation.public', function immunizationRecommendationPublic() {
    let cursor = ImmunizationRecommendation.find({
        userId: { $exists: false },
    }, {
        fields: ImmunizationRecommendation.publicFields
    });

    // return cursor;
});

Meteor.publish('immunization-recommendation.private', function immunizationRecommendationPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = ImmunizationRecommendation.find({
        userId: this.userId,
    }, {
        fields: ImmunizationRecommendation.privateFields,
    });

    // return cursor;
});
