const moment = require("moment");


var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

var generateLocation = (from, latitude, longitude) => {
    return {
        from,
        url : `https://www.google.com.ng/maps/?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = {generateMessage,generateLocation};


