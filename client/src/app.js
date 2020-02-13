const BucketItem = require('./models/bucket_item.js');
const ActivityGridView = require('./views/activity_grid_view.js');
const ActivityFormView = require('./views/activity_form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded");


  const activityForm = document.querySelector('form#activities-form');
  const activityFormView = new ActivityFormView(activityForm);
  activityFormView.bindEvents();

  const gridView = document.querySelector('#grid-view')
  const activityGridView = new ActivityGridView(gridView)
  activityGridView.bindEvents();

  const bucketItem = new BucketItem();
  bucketItem.getData();//fetch our data from backend
  bucketItem.bindEvents();
});
