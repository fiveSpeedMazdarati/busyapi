// Notes: This is based on something I found online while researching how Node handles scalability
// I think this would have to go in the actual app somewhere, but I don't know exactly where yet.
// If I had to make an educated guess, I'd say it should go in /bin/www. If not there, I'd look at app.js.
////////

// use the cluster module to fork the new processes
const cluster = require('cluster');
// use the os module to get the number of CPU cores available
const os = require('os');

if (cluster.isMaster) {
	// gets the number of CPUs from the operating system
	const cpuCount = os.cpus().length;	
	
	// verify the number of CPUs available
	console.log("Number of CPUs available: " + cpuCount);
	
	// fork a node for each of the available CPUs
	for (i = 0; i < cpuCount; i++) {
	
		cluster.fork();
		// I do not yet know if this is where I'd tell which fork what to do, 
		// or if Node handles that on its own
	}	
}