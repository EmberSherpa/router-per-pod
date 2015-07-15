import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'router-per-pod/tests/helpers/start-app';

var application;

module('Acceptance | lessons', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /lessons', function(assert) {
  visit('/lessons');

  andThen(function() {
    assert.equal(currentURL(), '/lessons');
  });
});
