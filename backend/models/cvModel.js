import mongoose from 'mongoose';

const cvSchema = mongoose.Schema({
	data: {
		required: false,
	},
});

const Cv = mongoose.model('Cv', cvSchema);

export default Cv;
