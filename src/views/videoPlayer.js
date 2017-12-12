var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.render();
    //listen on a change on its collection.
    //add argument to render to take a video id from the collection.
  },

  render: function() {
    this.$el.html(this.template(this.collection.at(0).attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
