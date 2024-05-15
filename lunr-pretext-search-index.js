var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-first-steps",
  "level": "1",
  "url": "sec-first-steps.html",
  "type": "Section",
  "number": "1.1",
  "title": "My Section Title",
  "body": " My Section Title  Section Text. Will you update?  "
},
{
  "id": "sec-advanced-topics",
  "level": "1",
  "url": "sec-advanced-topics.html",
  "type": "Section",
  "number": "1.2",
  "title": "My Advanced Section Title",
  "body": " My Advanced Section Title  Section Text.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})