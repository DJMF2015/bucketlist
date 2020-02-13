const PubSub = require('../helpers/pub_sub.js');
const ActivityView = require('./activity_view.js');

const ActivityGridView = function(container){
  this.container = container;
}

ActivityGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketItem:data-loaded', (event) => {
    this.render(event.detail);
  })
  this.container.addEventListener('click', (event) => {
    const id = event.target.value;
    PubSub.publish('ActivityGridView:activity-destroy-by-id', id);
  })
}


ActivityGridView.prototype.render = function (activities) {
  this.container.innerHTML = '';
  const activityView = new ActivityView(this.container); //->activityView
  activities.forEach((activity) => activityView.render(activity));
};

module.exports = ActivityGridView;
