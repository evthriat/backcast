var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({id: this.model.get('id')}));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
