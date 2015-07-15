import Ember from 'ember';
import config from './config/environment';

import admin from './pods/admin/router';
import lessons from './pods/lessons/router';
import students from './pods/students/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

[admin, lessons, students].forEach(Router.map, Router);

export default Router;
