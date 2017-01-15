/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DiagnosticReport } from './diagnostic-report.js';


if (Meteor.isServer) {
  describe('DiagnosticReport', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DiagnosticReport) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
