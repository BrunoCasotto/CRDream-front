module.exports = function(template) {

  var createImageNode = function(imageUrl) {
    var imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    imageDiv.style.backgroundImage ='url('+imageUrl+')';

    return template.appendChild(imageDiv);
  }

  var createLinkImageNode = function(imageUrl, linkUrl) {
    var linkImageDiv = document.createElement('a');
    linkImageDiv.setAttribute("href", linkUrl);

    var imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    imageDiv.style.backgroundImage ='url('+imageUrl+')';
    linkImageDiv.appendChild(imageDiv);

    return template.appendChild(linkImageDiv);
  }

  return {
    createImageNode,
    createLinkImageNode
  }
}