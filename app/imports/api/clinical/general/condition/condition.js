import { Mongo } from 'meteor/mongo';
import { ResourceCollection } from '/imports/api/ResourceCollection.js';
// ✅ import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/**
 * Extension of the Mongo.Collection in order to expose
 * useful class method hooks to modify or manipulate data
 * before invoking the super class's methods.
 *
 * @memberof Server.Condition
 * @extends Mongo.Collection
 */
class ConditionCollection extends ResourceCollection {}

/**
 * The MongoDB collection object that is exported and made available
 * to the server.  Client access is restricted, and may only access this
 * collection (by default) via server side Meteor Methods.
 * You may modify (not recommended) these permissions on the Condition.deny() line.
* @memberof Server.Condition
* @member Condition
*/
export const Condition = new ConditionCollection('Condition');

/**
 * Set the client side access rights to the Cases collection.
 * Default: Deny all
 */
Condition.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; }
});

/**
 * Set the default public and private field selectors.
 * @see ./publications.js
 */
Condition.publicFields = {};
Condition.privateFields = {};
