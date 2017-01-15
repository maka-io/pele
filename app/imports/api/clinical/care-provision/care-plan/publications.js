import { Meteor } from 'meteor/meteor';
import { CarePlan } from './care-plan.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('care-plan.public', function carePlanPublic() {
 *       let cursor = CarePlan.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: CarePlan.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.CarePlan
 * @member Publications
 */
Meteor.publish('care-plan.public', function carePlanPublic() {
    let cursor = CarePlan.find({
        userId: { $exists: false },
    }, {
        fields: CarePlan.publicFields
    });

    // return cursor;
});

Meteor.publish('care-plan.private', function carePlanPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = CarePlan.find({
        userId: this.userId,
    }, {
        fields: CarePlan.privateFields,
    });

    // return cursor;
});
