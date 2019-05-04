var mongoose = require( 'mongoose' );

var commentSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    text:  {
        type: String,
        required : true,
    }
  }, { timestamps: { createdAt: 'created'} });

  meetingSchema.methods.method = function(){
  }

  mongoose.model('Comment', commentSchema);