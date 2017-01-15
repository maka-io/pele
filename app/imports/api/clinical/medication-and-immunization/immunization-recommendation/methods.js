import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { ImmunizationRecommendation } from './immunization-recommendation.js';

/**
 * Using ValidatedMethod (maintained by MDG) is the best
 * practice by Meteor Development Group (MDG),
 * and as such is used here to validate that method
 * calls from the client are properly handled.
 *
 * All methods are disabled by default
 * Uncomment the return of each methods to enable
 */

/**
 * Client side insert method.
 * *Disabled by default. Uncomment return of method to enable*
 *
 * @memberof Server.ImmunizationRecommendation
 * @method
 * @property { string }     name        String that defines the method.
 * @property { function }   validate    Is run before the main execution.
 * @property { function }   run         The main action that is executed.
 */
const insertImmunizationRecommendation = new ValidatedMethod({
    name: 'immunization-recommendation.insert',
    validate: null,
    run(doc) {
        //return ImmunizationRecommendation.insert(doc);
    }
});

/**
 * Client side update method.
 * *Disabled by default. Uncomment return of method to enable*
 *
 * @memberof Server.ImmunizationRecommendation
 * @method
 * @property { string }     name        String that defines the method.
 * @property { function }   validate    Is run before the main execution.
 * @property { function }   run         The main action that is executed.
 */
const updateImmunizationRecommendation  = new ValidatedMethod({
    name: 'immunization-recommendation.update',
    validate: null,
    run([docId, obj]) {
        //return ImmunizationRecommendation.update(docId, {$set: obj});
    }
});

/**
 * Client side remove method.
 * *Disabled by default. Uncomment return of method to enable*
 *
 * @memberof Server.ImmunizationRecommendation
 * @method
 * @property { string }     name        String that defines the method.
 * @property { function }   validate    Is run before the main execution.
 * @property { function }   run         The main action that is executed.
 */
const removeImmunizationRecommendation  = new ValidatedMethod({
    name: 'immunization-recommendation.remove',
    validate: null,
    run(docId) {
        //return ImmunizationRecommendation.remove(docId);
    }
});

const RATE_LIMITED_METHODS = _.pluck([
    insertImmunizationRecommendation , updateImmunizationRecommendation , removeImmunizationRecommendation
], 'name');

if (Meteor.isServer) {
    const OPERATIONS = 5;
    const PER_SECOND = 1 * 1000; // milliseconds
    // Only allow 5 list operations per connection per second.
    DDPRateLimiter.addRule({
        name(name) {
            return _.contains(RATE_LIMITED_METHODS, name);
        },

        // Rate limit per connection ID.
        connectionId() { return true; },
    }, OPERATIONS, PER_SECOND);
}
