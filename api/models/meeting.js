var mongoose = require( 'mongoose' );

var meetingSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
    type: {
      type: String,
      required: true
    },
    notes:  {
        type: String,
        required : true,
    }
  }, { timestamps: { createdAt: 'created'} });

  meetingSchema.methods.method = function(){
  }

  mongoose.model('Meeting', meetingSchema);