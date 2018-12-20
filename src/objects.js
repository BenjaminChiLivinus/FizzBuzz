						// Exercise 1
/* const address = {
	street: "24 Mainland Avenue",
	city: "Maryland",
	zipcode: "32185"
}

function showAddress(address){
	for (let key in address) console.log(key, address[key]);
}

function showAddress2(address){
	for (let key of Object.keys(address)) console.log(key);
}

function showAddress3(address){
	for (let entry of Object.entries(address)) console.log(entry);
}

showAddress(address);
showAddress2(address);
showAddress3(address); */



						// Exercise 2
// Constructor Address Function
function Address(street, city, zipcode){
	this.street = street;
	this.city = city;
	this.zipcode = zipcode;
}

// Factory Addresss Function
function createAddress(street, city, zipcode){
	return {
		street,
		city,
		zipcode
	}
}

// console.log('Constructor', new Address('2 Marvis Close', 'Demport', '81286'));
// console.log('Factory', createAddress('2 Marvis Close', 'Demport', '81286'));


						// Exercise 3
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

// console.log('areEqual', areEqual(address1, address2));
// console.log('areSame', areSame(address1, address2));

address2 = address1;
// console.log('areSame', areSame(address1, address2));

function areEqual(address1, address2){
	return (address1.street === address2.street && 
				address1.city === address2.city &&
				address1.zipcode === address2.zipcode);
}

function areSame(address1, address2){
	return address1 === address2;
}

						// Exercise 4
function createComment(author, body){
	return {
		author,
		body
	}
}

function BlogPost(title, body, author, views, comments, isLive){
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = views,
	this.comments = comments;
	this.isLive = isLive;
}

let blogPost2 = new BlogPost(
	title = 'My House', 
	body = 'My house is green.',
	author = 'Mary Kalu',
	views = 108,
	comments = [createComment('Samuel Fabian', 'Great article!'), createComment('Roselyn Atiku', 'Ride on girl.')],
	isLive = true);

						// Exercise 5
function Post(title, body, author){
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = 0,
	this.comments = [];
	this.isLive = false;
}

let blogpost = new Post('Sony finds Abdin', 'Once upon a time...', 'Chinua Achebe');
// console.log(blogpost);

						// Exercise 6: PriceRange Objects
let priceRanges = [
	{label: '$', tooltip: 'Inexpensive', min: 0, max: 49},
	{label: '$$', tooltip: 'Moderate', min: 50, max: 99},
	{label: '$$$', tooltip: 'Expensive', min: 100, max: 150}
]







