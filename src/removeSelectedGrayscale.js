  
// the name of the function should match the handler in manifest.json
export function onRunRemoveSelectedGaryscale(context) {

//fetch the doc object because it has your artboards and layers
var doc = context.document;

//fetch the currently selected objects in the doc
var selection = context.selection;

//counter for number of grayscaled removed
var removedGrayArtboards =0; 


if (selection.count() == 0) {
  doc.showMessage("Please select an Artboard");
  } 
else 
{
  for (var i = 0; i < selection.count(); i++) {

    if (selection[i].class() == "MSArtboardGroup") { //check if the selection is an artboard
      var layers = selection[i].layers();

      for (var j=0; j< layers.count();j++) {

        if (layers[j].class() == "MSShapeGroup" && layers[j].name() == "*grayscaleOverlay*") //check if the layer is a shape and named '*grayscaleOverlay*'
        { 
          layers[j].removeFromParent(); //remove the grayscale overlay layer
          removedGrayArtboards += 1;
        }

      }

    }
    doc.showMessage(removedGrayArtboards+" grayscales removed! 😎");
  }
}
};


  	

