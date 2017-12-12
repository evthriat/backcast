var AppView = Backbone.View.extend({
  
    

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.mainVideo = new Video(window.exampleVideoData[0]);

    this.videoPlayer = new VideoPlayerView({model: this.mainVideo});
    this.videoList = new VideoListView();
    this.render().$el.find('.player h5').append(this.videoPlayer.$el);
    this.$el.find('.list').append(this.videoList.$el);
    

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
