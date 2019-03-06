console.log("Keys loaded");

/*exports.spotify = {
    id: "24bd42e1638d4579aec13f2bd6b94d91",
    secret: "25f6f405c00d458c9089a0c9757f365b"
};

exports.twitter = {
    consumer_key: 'dX4l0PI77TrOMWDgbagVZMwhV',
    consumer_secret: 'v48oA5AWlkpKiGElxC7sVwqMhmFYqIjIyN8Z2VAdZrrcrX5Z3F',
    access_token_key: '3128787200-HEH4AFlpF23YbVeJGJIOrhoZUqI7ArJXlsD84Gw',
    access_token_secret: 'wOEGmL0VHOscdvdQjoVZMwIJFw7q3n1LzKbJDnq25GEEP'
};*/


var twitterKeys = {
    consumer_key: 'dX4l0PI77TrOMWDgbagVZMwhV',
    consumer_secret: 'v48oA5AWlkpKiGElxC7sVwqMhmFYqIjIyN8Z2VAdZrrcrX5Z3F',
    access_token_key: '3128787200-HEH4AFlpF23YbVeJGJIOrhoZUqI7ArJXlsD84Gw',
    access_token_secret: 'wOEGmL0VHOscdvdQjoVZMwIJFw7q3n1LzKbJDnq25GEEP'
  };
  
  var spotifyKeys = {
    id: "24bd42e1638d4579aec13f2bd6b94d91",
    secret: "25f6f405c00d458c9089a0c9757f365b"
  };
  
  var omdbKeys = {
      id: '40e9cece'
  }
  
  module.exports.twitterKeys = twitterKeys;
  module.exports.spotifyKeys = spotifyKeys;
  module.exports.omdbKeys = omdbKeys;