const RequestHelper = function (url) {
  this.url = url;
};
//fetch response (all data) from server
RequestHelper.prototype.get = function () {
  return fetch(this.url)
  .then((response) => response.json());
};

//POST payload from formview and add new unique resource
RequestHelper.prototype.post = function (payload) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => response.json());
};

//PUT payload request to update body at specified attribute
RequestHelper.prototype.put = function (payload) {
  return fetch(this.url, {
    method: 'PUT',
    body: JSON.stringify(payload), //id: event.detail
    headers: {'Content-type': 'application/json' }
  })
  .then((response) => response.json());
};
//destroy request by id by assoiate with given url
RequestHelper.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
  .then((response) => response.json());
};
module.exports = RequestHelper;
