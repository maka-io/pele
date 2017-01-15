import { Meteor } from 'meteor/meteor';
import { Restivus } from 'meteor/maka:rest';
import { Practitioner } from './practitioner.js';

/**
 * RESTful create, read, update, delete (CRUD) API.
 * By default this is disabled, please refer to the
 * advanced usage and customization
 * of this server side routing, at:
 * {@link https://github.com/kahmali/meteor-restivus/}
 *
 * *To enable, uncomment the last line in this file.*
 *
 * @memberof Server.Practitioner
 */
const PractitionerApiV1 = new Restivus({
    version: 'v1',
    useDefaultAuth: true,
    prettyJson: Meteor.isDevelopment
});

// Representational State (REST) endpoints disabled by default.
// Uncommenting below will expose ALL routes for Practitioner
//
// Please review restivus documentation on how to harden endpoints.
//
// USE WITH CAUTION... can you imagine - $ maka g:api BankRecords
PractitionerApiV1.addCollection(Practitioner);
