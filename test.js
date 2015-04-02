var Backbone = require('./index.js');

 //console.log('1',Backbone.Model.extend);

 var testMDL = Backbone.Model.extend({

     computedFields: true,

     defaults:{
         id:null,
         date:null,
         amount:1.00,
         count:1
     },


     initialize: function(){

         //console.log('init done!');

     },

     computed:{

         itemTotal:{
             depends:['amount','count'],
             get: function(fields){
                return fields.amount * fields.count;
             }

         }

     }

 });

console.time("1");

for(var x=0;x<1;x++) {

    var t = new testMDL({amount: 12.12});

    t.listenTo(t,'change:itemTotal', function (mdl) {
        console.log('new itemTotal', mdl.get('itemTotal'));
    });

//console.log(t.get('itemTotal'));
    t.set('count', 23);
    t.set('itemTotal',44444444);
    t.set('amount', 1.75);

//console.log(t.get('itemTotal'));
   console.log(t.toJSON());
}

console.timeEnd("1");