var mongoose = require( 'mongoose' );

var attatchmentSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    name: {
      type: String,
      required: true
    },
    path:  {
        type: String,
        required : true,
    }
  }, { timestamps: { createdAt: 'created'} });

  attatchmentSchema.methods.method = function(){
  }

  mongoose.model('Attachment', attatchmentSchema);