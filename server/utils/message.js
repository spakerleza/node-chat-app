var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocation = (from, latitude, longitude) => {
    return {
        from,
        url : `https://www.google.com.ng/maps/?q=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMessage,generateLocation};


