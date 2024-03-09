import asyncHandler from '../middleware/asyncHandler.js';
import Cv from '../models/cvModel';

//@desk    get CV data
//@route   GET /
//@access  Public
const getCv = asyncHandler(async (req, res) => {
	const cv = await Cv.find({});

	if (cv && cv.length > 0) {
		res.status(200).json(cv);
	} else {
		res.status(404);
		throw new Error('Cv not found');
	}
});

export { getCv };
