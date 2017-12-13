var SearchView = Backbone.View.extend({
  events: {'click .btn': 'triggerSearch'},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  triggerSearch: function() {
    var query = this.$el.find('.form-control').val();
    console.log('query: ', query);
    this.collection.search(query);
    this.$el.find('.form-control').val('');
  },

  template: templateURL('src/templates/search.html')

});
