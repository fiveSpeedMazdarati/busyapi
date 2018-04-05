module.exports = function(app){
    app.post('/api/usages', function(req, res){

        // Store the supplied usage data
        app.usages.push(req.body);
		
		// if this app is connected to a database rather than storing items in an array
		// this line won't work to get the usageId anymore. It would have to be the next id number from the database
		// instead of the length of the array storing the requests
        var usageId = app.usages.length;
        console.log('Stored usage count: ' + usageId);

        res.status(201).json({'id':usageId});
    });
}
