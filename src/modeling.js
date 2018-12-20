function RestaurantArticle(){
	this.name = '';
	this.address = '';
	this.rating = 0;
	this.reviews = [];
	this.thumbnail = new Object();
	this.priceRange = PriceRanges.inexpensive;
}

function PriceRanges() {
	this.inexpensive = {label: '$', tooltip: 'Inexpensive', min: 0, max: 49};
	this.moderate = {label: '$$', tooltip: 'Moderate', min: 50, max: 99};
	this.expensive = {label: '$$$', tooltip: 'Expensive', min: 100, max: 150};
}

function Comment(author, body){
	this.id = guid();
	this.author = author;
	this.body = body;
	this.replies = [];
	this.addReply = function() {
		this.replies.push(new Comment());
	};
}

// class Comment {
// 	constructor(author, body) {
// 		this.id = guid();
// 		this.author = author;
// 		this.body = body;
// 		this.replies = [];
// 		this.addReply = function () {
// 			this.replies.push(new Comment());
// 		};
// 	}
// }

function guid() {
	return "ss-s-s-s-sss".replace(/s/g, function() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	});
}












