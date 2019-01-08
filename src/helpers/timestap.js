const moment = require('moment');

const helpers = {};

helpers.timeago = date => {
    return moment(date).startOf('minute').fromNow();
}

module.exports = helpers;