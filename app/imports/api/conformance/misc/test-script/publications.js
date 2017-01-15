import { Meteor } from 'meteor/meteor';
import { TestScript } from './test-script.js';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('test-script.public', function testScriptPublic() {
 *       let cursor = TestScript.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: TestScript.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.TestScript
 * @member Publications
 */
Meteor.publish('test-script.public', function testScriptPublic() {
    let cursor = TestScript.find({
        userId: { $exists: false },
    }, {
        fields: TestScript.publicFields
    });

    // return cursor;
});

Meteor.publish('test-script.private', function testScriptPrivate() {
    if (!this.userId) {
        return this.ready();
    }

    let cursor = TestScript.find({
        userId: this.userId,
    }, {
        fields: TestScript.privateFields,
    });

    // return cursor;
});
