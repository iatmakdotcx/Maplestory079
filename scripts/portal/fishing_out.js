var returnmap;

function enter(pi) {
	returnmap = pi.getSavedLocation("FISHING");
	if (returnmap == -1) {
		returnmap = 100000000;
	}
	pi.warp(returnmap)
	return true;
}