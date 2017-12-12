var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .media-body': 'handleClick'
  },  
  
  handleClick: function() {
    this.model.select();

  },
  // initialize: function() {

  // },
  


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
