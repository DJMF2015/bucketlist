const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const BucketItem = function (url) {
  this.url = 'http://localhost:3000/api/activities';
  this.request = new RequestHelper(this.url);
};

BucketItem.prototype.bindEvents = function () {
  PubSub.subscribe('ActivityFormView:form-submitted', (event) => {
    console.log("ActivityFormView", event.detail);
    this.postActivity(event.detail);
  });
  //pubsub PUT update ->completed to-do...
  PubSub.subscribe('ActivityGridView:activity-completed-update-id', (event) => {
    this.request.put({ id: event.detail })//payload
      .then((Showdata) => {
        console.log(Showdata)
        PubSub.publish('BucketItem:data-loaded', Showdata)
      });
  })

  PubSub.subscribe('ActivityGridView:activity-destroy-by-id', (event) => {
    this.request.delete(event.detail)
      .then((activities) => {
        PubSub.publish('BucketItem:data-loaded', activities);
      })
      .catch(console.error);
  });
};

BucketItem.prototype.getData = function () {
  this.request.get()
    .then((activities) => {
      PubSub.publish('BucketItem:data-loaded', activities);
    })
    .catch(console.error);
};

//post request received and publish response on channel to BucketFormView
BucketItem.prototype.postActivity = function (activity) {
  this.request.post(activity)
    .then((activities) => {
      PubSub.publish('BucketItem:data-loaded', activities);
    })
    .catch(console.error);
};



module.exports = BucketItem;
