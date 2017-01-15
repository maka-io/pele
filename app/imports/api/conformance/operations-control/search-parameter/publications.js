import { Meteor } from 'meteor/meteor';
import { SearchParameter } from './search-parameter.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('search-parameter.public', function searchParameterPublic() {
 *       let cursor = SearchParameter.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: SearchParameter.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.SearchParameter
 * @member Publications
 */
Meteor.publish('search-parameter.public', function searchParameterPublic() {
    let cursor = SearchParameter.find({
        userId: { $exists: false },
    }, {
        fields: SearchParameter.publicFields
    });

    // return cursor;
});

Meteor.publish('search-parameter.private', function searchParameterPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = SearchParameter.find({
        userId: this.userId,
    }, {
        fields: SearchParameter.privateFields,
    });

    // return cursor;
});
