function BusStopService()
{
	var stops = [
		{ stopId: 1, lat: 33.760262, lng: -84.384706, donationsRaisedInDollars: 100, name: 'Hertz at Portman Blvd', donorDetails :[
			{stopName: 'Hertz at Portman Blvd', firstName: 'David', lastName: 'Walter', email : 'xyz@gmail.com', amountDonated: 100}
		]},
		{ stopId: 2, lat: 33.760138, lng: -84.388043, donationsRaisedInDollars: 100, name: 'Peachtree Center Mall', donorDetails :[
			{stopName: 'Peachtree Center Mall', firstName: 'Robert', lastName: 'Watson', email : 'xyz@gmail.com', amountDonated: 100}
		]},
		{ stopId: 3, lat: 33.757355, lng: -84.386423, donationsRaisedInDollars: 200, name: 'Georgia Pacific', donorDetails :[
			{stopName: 'Georgia Pacific', firstName: 'Julie', lastName: 'Simpson', email : 'xyz@gmail.com', amountDonated: 200}
		]},
		{ stopId: 4, lat: 33.758648, lng: -84.382754, donationsRaisedInDollars: 0, name: 'Sheraton Atlanta', donorDetails :[
			{stopName: 'Sheraton Atlanta', firstName: 'Maria', lastName: 'Gonzalvis', email : 'xyz@gmail.com', amountDonated: 300}
		]},
		{ stopId: 5, lat: 33.755365, lng: -84.384921, donationsRaisedInDollars: 35, name: 'Loudermilk Center', donorDetails :[
			{stopName: 'Loudermilk Center', firstName: 'Kumkum', lastName: 'Patel', email : 'xyz@gmail.com', amountDonated: 35}
		] },
		{ stopId: 6, lat: 33.756887, lng: -84.389417, donationsRaisedInDollars: 45, name: 'Rialto Arts Center', donorDetails :[
			{stopName: 'Rialto Arts Center', firstName: 'Simran', lastName: 'Raj', email : 'xyz@gmail.com', amountDonated: 45}
		]},
		{ stopId: 7, lat: 33.759215, lng: -84.391719, donationsRaisedInDollars: 50, name: 'Sky View Atlanta',donorDetails :[
			{stopName: 'Sky View Atlanta', firstName: 'John', lastName: 'Smith', email : 'xyz@gmail.com', amountDonated: 50}
		] },
		{ stopId: 8, lat: 33.762046, lng: -84.391708, donationsRaisedInDollars: 40, name: 'Centennial Park', donorDetails :[
			{stopName: 'Centennial Park', firstName: 'Donald', lastName: 'Poter', email : 'xyz@gmail.com', amountDonated: 40}
		] },
		{ stopId: 9, lat: 33.763004, lng: -84.387041, donationsRaisedInDollars: 23, name: 'Suntrust Plaza', donorDetails :[
			{stopName: 'Suntrust Plaza', firstName: 'Davis', lastName: 'Rose', email : 'xyz@gmail.com', amountDonated: 23}
		] },
		{ stopId: 10, lat: 33.754661, lng: -84.380101, donationsRaisedInDollars: 10, name: 'Sweet Auburn Market', donorDetails :[
			{stopName: 'Sweet Auburn Market', firstName: 'Hillary', lastName: 'Summer', email : 'xyz@gmail.com', amountDonated: 10}
		] }
	];

	/**
	 * returns an array of all stops on success
	 * on failure, throws Error
	 */
	this.getAllStops = function ()
	{
		randomlyFailWith('Unable to read database');

		return clone(stops);
	}

	/**
	 * returns nothing on success
	 * on failure, throws Error
	 */
	this.addDonation = function (stopId, donationAmountInDollars, donorDetails)
	{debugger;
		randomlyFailWith('Unable to connect to database');
		console.log(stopId,donorDetails);

		var stop = stops.find(function (s)
		{
			return s.stopId == stopId;
		});

		if (!stop)
		{
			throw new Error('Stop with stop id ' + stopId + ' not found.');
		}

		stop.donationsRaisedInDollars += parseFloat(donationAmountInDollars);
		donorDetails.stopName = stop.name;
		stop.donorDetails.push(donorDetails);
;	}


	// thanks to http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
	function clone(obj) 
	{
	    var copy;

	    // Handle the 3 simple types, and null or undefined
	    if (null == obj || 'object' != typeof obj) return obj;

	    // Handle Date
	    if (obj instanceof Date) {
	        copy = new Date();
	        copy.setTime(obj.getTime());
	        return copy;
	    }

	    // Handle Array
	    if (obj instanceof Array) {
	        copy = [];
	        for (var i = 0, len = obj.length; i < len; i++) {
	            copy[i] = clone(obj[i]);
	        }
	        return copy;
	    }

	    // Handle Object
	    if (obj instanceof Object) {
	        copy = {};
	        for (var attr in obj) {
	            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
	        }
	        return copy;
	    }

	    throw new Error('Unable to copy obj! Its type is not supported.');
	}

	function randomlyFailWith(errorMessage)
	{
		if ((Math.random() * 100) > 80.0)
		{
			throw new Error(errorMessage);
		}
	}
}
