var Videos = Backbone.Collection.extend({

  model: Video,
  initialize: function(searchQuery) {
    this.search(searchQuery);
  },

  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      contentType: 'application/json',
      data: {'maxResults': '5',
              'part': 'snippet',
              'q': query,
              'type': 'video',
              'key': window.YOUTUBE_API_KEY},

      success: (data) => {
        console.log('video received: ', data);
        this.reset(data.items);
      },
      error: (data) => {
        console.error('video: Failed to send message', data);
      }
    }); 
  }
});
