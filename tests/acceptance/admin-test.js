import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'router-per-pod/tests/helpers/start-app';

var application;

module('Acceptance | admin', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /admin', function(assert) {
  visit('/admin');

  andThen(function() {
    assert.equal(currentURL(), '/admin');
    assert.ok(Ember.$(':contains(Admin)'));
  });
});
