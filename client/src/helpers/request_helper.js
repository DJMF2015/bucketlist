const RequestHelper = function (url) {
 this.url = url;
};
//fetch response (all data) from server
RequestHelper.prototype.get = function () {
 return fetch(this.url)
   .then((response) => response.json());
};

//POST payload from formview, parse and add to db
RequestHelper.prototype.post = function (payload) {
 return fetch(this.url, {
   method: 'POST',
   body: JSON.stringify(payload),
   headers: { 'Content-Type': 'application/json' }
 })
   .then((response) => response.json());
};

//FETCH
RequestHelper.prototype.put = function (payload) {
  return fetch(this.url, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {'content-type': 'application/json'}
  }).then((response) => response.json());
};

//destroy request by id by assoiate with given url
RequestHelper.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};
module.exports = RequestHelper;
