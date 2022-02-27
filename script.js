console.log("RobloxBetter has access to this page");

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var el = document.createElement("discord");
el.innerHTML = '<a href=“discord://”><div class="discord" style="width: 39px;background: #5865F2;height: 31px;position: absolute;margin-top: -1.95em;margin-left: 15em;padding: 5px 10px 5px 10px;cursor: pointer;"><img src="https://daniel4-scratch.github.io/assets/Discord-Logo-White.png" width="20">   </div></a>';
var div = document.getElementByClassName("chat-search");
insertAfter(div, el);
