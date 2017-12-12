var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set({'id': video.id.videoId, 
              'thumbnail': video.snippet.thumbnails.default.url, 
              'description': video.snippet.description, 
              'title': video.snippet.title});
  },

  select: function() {
    this.trigger('select', this);
  }

});
