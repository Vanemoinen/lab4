exports.viewProject = function(req, res) {
	var name = req.params.nam;
	console.log("The project name is: " + name);
	res.render('project', {
		'projectName': name
	});
	//controller code
}