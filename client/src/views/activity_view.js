const PubSub = require('../helpers/pub_sub.js');

const ActivityView = function (container) {
  this.container = container;
};

ActivityView.prototype.render = function (activity) {
  const tile = document.createElement('div');

  const description = document.createElement('h1');
  description.textContent = `Activity: ${activity.description}`;
  tile.appendChild(description);

  const location = document.createElement('p');
  location.textContent = `Location: ${activity.location}`;
  tile.appendChild(location);

  const type = document.createElement('p');
  type.textContent = `Type: ${activity.type}`;
  tile.appendChild(type);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = `Delete this activity`;
  deleteButton.value = activity._id;
  tile.appendChild(deleteButton);

  const completedBtn = document.createElement('button')
  completedBtn.innerText ='Done: '//html
  completedBtn.value = activity._id;
  tile.appendChild(completedBtn);


  this.container.appendChild(tile);

};

module.exports = ActivityView;
