import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'router-per-pod/tests/helpers/start-app';

var application;

module('Acceptance | students', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /students', function(assert) {
  visit('/students');

  andThen(function() {
    assert.equal(currentURL(), '/students');
  });
});
