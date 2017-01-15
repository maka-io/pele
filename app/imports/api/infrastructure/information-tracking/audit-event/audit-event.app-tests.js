/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { AuditEvent } from './audit-event.js';


if (Meteor.isServer) {
  describe('AuditEvent', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(AuditEvent) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
