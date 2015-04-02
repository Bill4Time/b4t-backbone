var Backbone = require("backbone");

Backbone = require('./B4TModelInitialize')(Backbone);

//Backbone.Events.__on = Backbone.Events.on;

//Backbone.Events.on = function() {
//
//    throw 'Events.on turned off for Bill4Time use Events.listenTo instead';
//
//};

//Backbone.Model.prototype.on = Backbone.View.on = Backbone.Collection.prototype.on  = Backbone.Router.prototype.on = Backbone.History.prototype.on = Backbone.Events.on;

module.exports = Backbone;