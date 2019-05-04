var mongoose = require( 'mongoose' );

var messageSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
    },
    fromuser: {
      type: [{ name: String, uid: mongoose.Schema.Types.ObjectId}],
      required: true
    },
    touser: {
        type: [{ name: String, uid: mongoose.Schema.Types.ObjectId}],
        required: true
      },

    text:  {
        type: String,
        required : true,
    }
  }, { timestamps: { createdAt: 'created'} });

  messageSchema.methods.method = function(){
  }

  mongoose.model('Message', messageSchema);