var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.render();
    console.log('rendered');
    //console.log('this.collection: ', this.collection);
    this.collection.on('select', function(event) {
      this.render();
      //console.log('eventSelect: ', event);
    }, this);

    this.collection.on('reset', function(event) {
      this.render();
    }, this);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.empty();
    for (var i = 0; i < this.collection.length; i++) {
      console.log('rendered', i);
      //console.log('this collection: ', this.collection.at(i));
      var tempVideoListEntery = new VideoListEntryView({model: this.collection.at(i)});
      this.$el.append(tempVideoListEntery.$el);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
