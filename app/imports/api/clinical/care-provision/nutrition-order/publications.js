import { Meteor } from 'meteor/meteor';
import { NutritionOrder } from './nutrition-order.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('nutrition-order.public', function nutritionOrderPublic() {
 *       let cursor = NutritionOrder.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: NutritionOrder.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.NutritionOrder
 * @member Publications
 */
Meteor.publish('nutrition-order.public', function nutritionOrderPublic() {
    let cursor = NutritionOrder.find({
        userId: { $exists: false },
    }, {
        fields: NutritionOrder.publicFields
    });

    // return cursor;
});

Meteor.publish('nutrition-order.private', function nutritionOrderPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = NutritionOrder.find({
        userId: this.userId,
    }, {
        fields: NutritionOrder.privateFields,
    });

    // return cursor;
});
