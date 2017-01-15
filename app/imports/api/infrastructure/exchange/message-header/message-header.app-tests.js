/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { MessageHeader } from './message-header.js';


if (Meteor.isServer) {
  describe('MessageHeader', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(MessageHeader) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
