// InDesign Hyperlinks

var doc = app.activeDocument;
var layers = doc.layers;

// if you want to check out any exsiting hyperlink objects in the document
var ogSources = doc.hyperlinkTextSources;

// lets add a new one and customise it
// a CharacterStyle Object has a TON of properties we can modify
// but we'll just look at the underline options
var underlineStyle = doc.characterStyles.add();

underlineStyle.underline = true;
//~ underlineStyle.underlineColor = doc.swatches.anyItem();
//~ //underlineStyle.underlineGapColor = ;
//~ //underlineStyle.underlineOffset = ;
//~ //underlineStyle.underlineTint = ;
//~ //underlineStyle.underlineType = ;
//~ //underlineStyle.underlineWeight = ;

var text = layers[0].textFrames[0].texts[0];

var hyperlinkSource = doc.hyperlinkTextSources.add(text);
hyperlinkSource.appliedCharacterStyle = underlineStyle;
hyperlinkDestination = doc.hyperlinkURLDestinations.add("https://aescripts.com/authors/nt-productions/");
doc.hyperlinks.add(hyperlinkSource, hyperlinkDestination);