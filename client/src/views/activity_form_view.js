const PubSub = require('../helpers/pub_sub.js');

const ActivityFormView = function (form) {
  this.form = form;

};

ActivityFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.submitForm(event);
  })
}

ActivityFormView.prototype.submitForm = function(event) {
  event.preventDefault();
  const newActivity = this.createNewActivity(event.target);//dom elemnt
  PubSub.publish("ActivityFormView:form-submitted", newActivity);
  console.log('submit form...', newActivity);
  event.target.reset();
};

//create new activity and publish to model "ActivityFormView:form-submitted"
ActivityFormView.prototype.createNewActivity = function(form) {
  const newActivity = {
    description: form.description.value,
    location: form.location.value,
    type: form.type.value,
    isDone: false
  };
  return newActivity;
};





module.exports = ActivityFormView;
