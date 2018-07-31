// constructor
function SftGear(name, size, color, stock, image) {
	this.name = name
	this.size = size
	this.color = color
	this.stock = stock 
	this.image = image
}
//an array to add new product
var clothsArray = [] 
//new product from the product constructor

var pigeontee = new SftGear('Pigeon Tee', 'medium' , 'black', 200, "img/pigeon.jpg")
var freetibet = new SftGear('Free Tibet', 'large', 'black', 70, 'img/freetibet.png')
var halfsleeve = new SftGear('Half Sleeve', 'small', 'black', 150, 'img/halfsleeve.jpg')
var unfreetee = new SftGear('Unfree Tee', 'medium', 'grey', 500, 'img/unfree.jpg')
var wintertee = new SftGear('Winter Tee', 'large', 'black', 40, 'img/winter.jpg' )
var snowliontee = new SftGear('Snow Lion', 'small', 'black', 300, 'img/snowlion.jpg')



// adding product to array of products

clothsArray.push(pigeontee)
clothsArray.push(freetibet)
clothsArray.push(halfsleeve)
clothsArray.push(unfreetee)
clothsArray.push(wintertee)
clothsArray.push(snowliontee)

//looping through products array
for(i = 0; i < clothsArray.length; i++) {
	

	var tName = document.createTextNode(clothsArray[i].name)
	var tSize = document.createTextNode(' Available size ' + clothsArray[i].size)
	var tColor = document.createTextNode(' Color ' + clothsArray[i].color)
	var tButton = document.createTextNode(' Buy Now ')
	var tStock = document.createTextNode(' In stock ' + clothsArray[i].stock)
	var tImage = clothsArray[i].img

	var newItem = document.createElement('div')
	var newDiv = document.createElement('div')
	var nameH1 = document.createElement('h1')
	var sizeH3 = document.createElement('h3')
	var colorH3 = document.createElement('h3')
	var stockH3 = document.createElement('h3')
	var btn = document.createElement('button')
	var image = document.createElement('img')

	
	nameH1.appendChild(tName)
	sizeH3.appendChild(tSize)
	colorH3.appendChild(tColor)
	stockH3.appendChild(tStock)
	btn.appendChild(tButton)
	btn.className = 'btn btn-primary btn-lg'
	image.src = "tImage"
	image.className = 'img-responsive'


	newItem.className = 'col-sm-4'
	newDiv.className = 'tshirt shirtName' + [i] + 'thumbnail'
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH3)
	newDiv.appendChild(stockH3)
	newDiv.appendChild(colorH3)
	newDiv.appendChild(sizeH3)
	newDiv.appendChild(btn)
	newItem.appendChild(newDiv)

	image.src = clothsArray[i].image


	document.getElementById('products').appendChild(newItem)




}

