var colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];
  var sizes=[
    "0.00041px",
    "0.0000801px",
    "0.04001px",
      "0.00081px",
     "0.041px",
      "0.081px",
      "0.8px",
      "0.0061px",
      "0.71px",
      "0.801px",
      "1px",
      "2px",
      "3px",
      "4px",
      "10px",
      "20px",
      "30px",
      "40px",
      "50px",
      "60px",
      "70px",
      "80px",
      "90px",
      "100px",
      "110px",
      "120px",
      "130px",
      "140px",
      "150px",
      "160px",
      "170px",
      "350px",
      "460px",
      "570px",
      "680px",  
  ]
  var pos = [
    //   "1%",
    //   "5%",
    //   "7%",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
     
  ]

  var borderstyles=[
      "dotted",
      "dashed",
      "double",
      "inset",
      "groove",
      "dotted dashed",
      "dotted ridge",
      "dotted double",
      "double groove",
  ]
  
  var blobs = document.querySelectorAll(".blob");
// var colors= "rgba(" + r + "," + g + "," + b + "," + a + ")"
for(var i=0;i<blobs.length;i++){
blobs[i].style.position="absolute";
blobs[i].style.left=pos[Math.floor(Math.random() * pos.length)];
blobs[i].style.bottom=pos[Math.floor(Math.random() * pos.length)];
blobs[i].style.right=pos[Math.floor(Math.random() * pos.length)];
blobs[i].style.top=pos[Math.floor(Math.random() * pos.length)];
blobs[i].style.padding=sizes[Math.floor(Math.random() * sizes.length/2)];
blobs[i].style.opacity=pos[Math.floor(Math.random() * pos.length)];
blobs[i].style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
blobs[i].style.width= sizes[Math.floor(Math.random() * sizes.length)];
blobs[i].style.height= sizes[Math.floor(Math.random() * sizes.length)];
blobs[i].style.borderTopRightRadius= sizes[Math.floor(Math.random() * sizes.length)];
blobs[i].style.borderBottomRightRadius= sizes[Math.floor(Math.random() * sizes.length)];
blobs[i].style.borderTopLeftRadius= sizes[Math.floor(Math.random() * sizes.length)];
blobs[i].style.borderBottomLeftRadius= sizes[Math.floor(Math.random() * sizes.length)];
blobs[i].style.borderStyle= borderstyles[Math.floor(Math.random() * borderstyles.length)];
blobs[i].style.borderColor= colors[Math.floor(Math.random() * colors.length)];
blobs[i].style.borderSize= sizes[Math.floor(Math.random() * sizes.length)];
}

