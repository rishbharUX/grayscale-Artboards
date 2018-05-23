//the name of the function should match the handler in manifest.json
export function onRunAll(context) {

//fetch the doc object because it has your artboards and layers
var doc = context.document;

//fetch the content of currentPage(while the plugin is being used) in Sketch
var page = context.document.currentPage();
var artboards = page.artboards();
var grayedArtboards =0; 
var alreadyGrayed = 0;


for (var i = 0; i < artboards.count(); i++) {
  var layerType = artboards[i].class();
  if (artboards[i].class() == "MSArtboardGroup") {
    var addGrayFlag = 1;
    var layers = artboards[i].layers();
    for (var j=0; j< layers.count();j++) { //loop to look through all artboards if the grayscale layer exists, but is hidden

      if (layers[j].class() == "MSShapeGroup" && layers[j].name() == "*grayscaleOverlay*")
      {

        if(layers[j].isVisible())
          {
            addGrayFlag =0;
            alreadyGrayed = 1;
          }

        else if(!layers[j].isVisible())
          {
            layers[j].removeFromParent();
          }

      }

    }

    if(addGrayFlag==1)       
      {

        var artboard = artboards.objectAtIndex(i);
        var artboardFrame = artboard.frame();
        var artboardWidth = artboardFrame.width();
        var artboardHeight = artboardFrame.height();
      	 
      	var rect = MSRectangleShape.alloc().init();
        rect.setName("*grayscaleOverlay*");
        rect.frame = MSRect.rectWithRect(NSMakeRect(0,0,artboardWidth,artboardHeight)); //matching the size of the artboard to the overlay gray rectangle
        var shapeGroup = MSShapeGroup.shapeWithPath(rect);

        var fill = shapeGroup.style().addStylePartOfType(0);
        fill.color = MSColor.colorWithRGBADictionary({r: 1, g: 1, b: 1, a: 1});//first - coloring the grayscale overlay white
        
        shapeGroup.style().contextSettings().setBlendMode(14);//second - setting the blend mode for overlay rectangle to be 'Color' (14)
        artboard.addLayers([shapeGroup]); //add the overlay grayscale rectangle on the artboard
        grayedArtboards += 1;

      }

  } else {
  doc.showMessage("That's not an Artboard. You selected a "+layerType+".");
  }

  if(grayedArtboards!=0)
    doc.showMessage(grayedArtboards+" Artboards grayscaled! 😎");
  else if(grayedArtboards==0 && alreadyGrayed>0)
    doc.showMessage("Artboards already grayscaled. 😇");  
}
};




