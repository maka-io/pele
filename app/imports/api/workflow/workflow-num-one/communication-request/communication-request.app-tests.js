/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { CommunicationRequest } from './communication-request.js';


if (Meteor.isServer) {
  describe('CommunicationRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(CommunicationRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
