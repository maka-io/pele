/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { EpisodeOfCare } from './episode-of-care.js';


if (Meteor.isServer) {
  describe('EpisodeOfCare', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(EpisodeOfCare) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
