const PubSub = require('../helpers/pub_sub.js');

const ActivityView = function (container) {
  this.container = container;
};

ActivityView.prototype.render = function (activity) {
  const tile = document.createElement('div');

 //container to hold associated activity id for each comple button
  const itemContainer = document.createElement('div')
  itemContainer.id = activity._id;

  const completedElement = document.createElement('li');
  completedElement.textContent = `Complete: ${activity.isDone}`;
  const unorderedList = document.createElement('ul');
  unorderedList.appendChild(completedElement);

  const description = document.createElement('h1');
  description.textContent = `Activity: ${activity.description}`;
  tile.appendChild(description);

  const location = document.createElement('p');
  location.textContent = `Location: ${activity.location}`;
  tile.appendChild(location);

  const type = document.createElement('p');
  type.textContent = `Type: ${activity.type}`;
  tile.appendChild(type);

  //delete activity
  const deleteButton = document.createElement('button');
  deleteButton.textContent = `Delete this activity`;
  deleteButton.value = activity._id;
  tile.appendChild(deleteButton);

//  if(!activity.isDone) {
//     this .createCompletedButton(activity._id)
//     }  this.container.appendChild(tile);
  this.container.appendChild(unorderedList);
}

//mark activity as done/complete
// ActivityView.prototype.createCompletedButton = function(id){
//   const completeButton = document.createElement('button');
//   completeButton.textContent = "Done?";
//   // completeButton.id;
//   this.container.appendChild(completeButton);

//   completeButton.addEventListener('click', (id) => {
//     PubSub.publish('ActivityView:isDone-Clicked', id.target.value)
//   });
}



module.exports = ActivityView;
