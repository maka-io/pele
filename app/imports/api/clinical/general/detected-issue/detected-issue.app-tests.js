/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DetectedIssue } from './detected-issue.js';


if (Meteor.isServer) {
  describe('DetectedIssue', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DetectedIssue) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
