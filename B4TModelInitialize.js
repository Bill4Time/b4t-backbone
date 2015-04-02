/**
 * Created by Jeremy on 4/1/2015.
 */

var BackboneComputedFields = require('backbone-computedfields');
var _ = require('underscore');

var modBackbone = function(Backbone) {

    var extend = Backbone.Model.extend;
    var proto = Backbone.Model.prototype;

    Backbone.Model = function(attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId('c');
        this.attributes = {};
        if (options.collection) this.collection = options.collection;
        if (options.parse) attrs = this.parse(attrs, options) || {};
        attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
        this.set(attrs, options);
        this.changed = {};

        //Auto initialize computed fields
        //console.log('ComputedFields setup');
        //initialize the computed fields module if we have defined a computed object in the model.
        if(this.computed) {
            this.computedFields = new BackboneComputedFields(this);
        }

        this.initialize.apply(this, arguments);

    };

    Backbone.Model.prototype = proto;
    Backbone.Model.extend = extend;
    return Backbone;

};

module.exports = modBackbone;