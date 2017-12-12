var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.render();
    var thisVideoList = this;
    _.each(window.exampleVideoData, function(videoObj) {
      var tempVideo = new Video(videoObj);
      var tempVideoListEntery = new VideoListEntryView({model: tempVideo});
      thisVideoList.$el.append(tempVideoListEntery.render().$el);
    });
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
