//a constructor function for the gallery




function gallery(name,image,architect,constructed,location)
{
	this.name=name
	this.image=image
	this.architect=architect
	this.constructed=constructed
	this.location=location
}

//create new objects
var one= new gallery('GlassHouse','GlassHouse.jpeg','Philip Johnson',1949,'United States')
var two= new gallery('Stadelhofen','StadelHofen.jpeg','Santiago Calatrava',1894,'Switzerland')
var three= new gallery('VillaSavoye','VillaSavoye.jpeg','Le Corbusierv & Friend', 1931, 'France')
var four= new gallery('Divisare','DivisareStevenHoll.jpeg','Steven Holl',2006,'United States')
var five= new gallery('Hallidie Building','Hallidie.jpeg','Willis Polk',1917,'United States')
var six= new gallery('The WaterFall','TheWaterFall.jpeg','Frank Lloyd Wright',1964,'Pennsylvania')
var seven= new gallery('Church of Light','ChurchOfLight.jpeg','Tadoa Ando',1989,'Japan')
var eight= new gallery('Tugendhat','Tugendhat.jpeg','Ludwig Mies Van Der Rohe',1994,'Czech Republic')
var nine= new gallery('MarkThal','MarkThal.jpg','Winy Maas & Friends',2014, 'Netherlands')
var ten= new gallery('Wax Building','WaxBuilding.jpeg','Frank Lloyd Wright',1974,'United States')

//create a new array
var arrayGallery= new Array
arrayGallery.push(one,two,three,four,five,six,seven,eight,nine,ten)

for(var i=0;i<arrayGallery.length;i++)
{
	var a= document.createElement('h1')
	a.setAttribute('id','hi'+i)
	document.body.appendChild(a)

	var k= document.createElement('img')

	k.setAttribute("width", "250");
    k.setAttribute("height", "250");
	k.src= arrayGallery[i].image
	var b= document.createTextNode(arrayGallery[i].name)
	var c= document.createTextNode("Architect: "+arrayGallery[i].architect)
	var d= document.createTextNode("Constructed: "+arrayGallery[i].constructed)
	var e= document.createTextNode("Location: "+arrayGallery[i].location)
	a.appendChild(b)
	
	a.appendChild(k)
	a.appendChild(c)
	a.appendChild(br())
	a.appendChild(d)
	a.appendChild(br())
	a.appendChild(e)
	a.appendChild(br())

	var t= document.createElement('button')
	t.setAttribute('class','btn btn-success')
	document.getElementById('hi'+i).appendChild(t)
	var u= document.createTextNode('MoreInfo')
	t.appendChild(u)

}

function br()
{
	return document.createElement('br')
}