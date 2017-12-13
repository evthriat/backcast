var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.collection.on('select', function(e) {
      this.render(e.cid);
      console.log(this.collection.get(e.cid));

    }, this);

    this.collection.on('reset', function(event) {
      this.render();
    }, this);
  },

  render: function(cidTag) {
    cidTag = cidTag || this.collection.at(0).cid;
    this.$el.html(this.template(this.collection.get(cidTag).attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
