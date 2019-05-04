var mongoose = require( 'mongoose' );

var projectSchema = new mongoose.Schema({
    customer: {
      type: String,
      required: true
    },
    project:  {
        type: String,
        required : true,
        unique : true
    },
    accounttam: {
        type : Number,
        required : true
    },
    projecttam: {
        type: Number,
        required: Number
    },
    team: {
        type: [{role:String, name: String, uid: mongoose.Schema.Types.ObjectId}],
        required: true
    },
    ctd: {
        type: Number,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
  }, { timestamps: { createdAt: 'created', updatedAt: 'updated' } });

  projectSchema.methods.method = function(){
  }

  mongoose.model('Project', projectSchema);