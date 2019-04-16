$(document).ready(function() {
  function getQuery() {
    var s = window.location.search;
    var reg = /([^?&=]*)=([^&]*)/g;
    var q = {};
    var i = null;

    while (i = reg.exec(s)) {
      q[i[1]] = decodeURIComponent(i[2]);
    }

    return q;
  }

  var q = getQuery();
  console.log(q.data);

  try {
    var data = JSON.parse(q.data);
  } catch (err) {
    alert(err + "\nJSON=" + q.data);
  }
});
