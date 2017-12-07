var internal = [
{
	navname: `To Be`,
	navaddress: `#`
}
]

var external = [
{
	navname: `Other Discords`,
	navaddress: `#`
}
]

var personal = [
{
	navname: `Discord`,
	navaddress: `#`
},
{
	navname: `Twitter`,
	navaddress: `#`
},
{
	navname: `Twitch`,
	navaddress: `#`
},
{
	navname: `Youtube`,
	navaddress: `#`
},
{
	navname: `Snapchat`,
	navaddress: `#`
},



{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
},{
	navname: `Youtube`,
	navaddress: `#`
}
]

var navone = ``
var navtwo = ``
var navthree = ``
$.each(internal,function(index,item){navone +=`<span><a href="`+item.navaddress+`">`+item.navname+`</a></span>`})
$.each(external,function(index,item){navtwo +=`<span><a href="`+item.navaddress+`">`+item.navname+`</a></span>`})
$.each(personal,function(index,item){navthree +=`<span><a href="`+item.navaddress+`">`+item.navname+`</a></span>`})

$(`nav .internal .lower`).html(navone)
$(`nav .external .lower`).html(navtwo)
$(`nav .personal .lower`).html(navthree)

$(`.chngbtn`).click(function(){$(this).toggleClass(`active`)})

$(`#sitenav`).click(function(){$(`nav`).toggleClass(`active`)})

$(`#seizure`).click(function(){$(`#page`).toggleClass(`active`)})

$(window).resize(function() {
	if ($(window).width() < 620) {
		
	}
	else {
		
	}
})
