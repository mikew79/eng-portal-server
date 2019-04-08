var mongoose = require( 'mongoose' );

var projectSchema = new mongoose.Schema({
    id: {
      type: String,
      unique: true,
      required: true
    },
    customer: {
      type: String,
      required: true
    },
    project:  {
        type: String,
        required : true
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
        type: Array,
        required: true
    },
    ctd: {
        type: Number,
        required: false
    },
    notes: {
        type: String,
        required: false
    }
  });

  projectSchema.methods.method = function(){
  }

  mongoose.model('Project', projectSchema);