
// the name of the function should match the handler in manifest.json
export function onRunRemoveAllGaryscale(context) {

//fetch the doc object because it has your artboards and layers
var doc = context.document;

//fetch the content of currentPage(while the plugin is being used) in Sketch
var page = context.document.currentPage();
var artboards = page.artboards();

//counter for number of grayscaled removed
var removedGrayArtboards =0; 

for (var i = 0; i < artboards.count(); i++) {

  var layers = artboards[i].layers();

  for (var j=0; j< layers.count();j++) { //looking through all layers in all artboards on the current page

    if (layers[j].class() == "MSShapeGroup" && layers[j].name() == "*grayscaleOverlay*") {

      layers[j].removeFromParent();
      removedGrayArtboards += 1;
    }
  }
  doc.showMessage(removedGrayArtboards+" grayscales removed! 😎");
}
};




