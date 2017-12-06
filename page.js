var entry = [
{
	title: `owo kms owo kms owo kms owo kms owo kms owo kms `,
	date: `11/15/2017`,
	time: `11:11 am`,
	body: `all i got all i got all i got all i got i dont know what you wanted to show`,
	tags: `update`
},
{
	title: `well rip i died`,
	date: `11/15/2017`,
	time: `11:34 am`,
	body: `dun did the suicidel thingers`,
	tags: `update`
},
{
	title: `yay`,
	date: `12/6/2017`,
	time: `12:59 pm`,
	body: `this bitchnips of a site works now`,
	tags: `announcement`
}
]

var blog = ``
$.each(entry, function(index, item) {
blog +=
	`<section class="`+item.tags+`">` +
	`<header>` +
	`<span>` +
	item.title +
	`</span>` +
	`<time>` +
	item.date +
	`<span>` +
	item.time +
	`</span>` +
	`</time>` +
	`</header>` +
	`<article>` +
	item.body +
	`</article>` +
	`<sub>` +
	item.tags +
	`</sub>` +
	`</section>`
})

$(`.blog`).html(blog)
$(`#filter span`).click(function() {
  var refTag = this.id.replace(``, ``),
    refTagSlo = new RegExp(refTag, `i`)
  var rows = $(`main .wrapper section`).show()
  console.log(refTag, refTagSlo);
  if (refTag != `all`) {
    rows.filter(function() {
		console.log($(this).children().last().text().match(refTagSlo))
		return !$(this).children().last().text().match(refTagSlo)
	})
	.hide()
  }
})

