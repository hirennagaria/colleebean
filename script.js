var color = tinycolor("red");
console.log(color.toHexString());

let analogousColors, monochromaticColors, splitcomplementColors, triadColors, tetradColors, complementColors, isLightColor;

var setColors = function(newPalette) {
  let mainColor = tinycolor(newPalette);
  if(mainColor.getFormat()){
    console.log("color is " + mainColor.toHex());
  }
  else {
    mainColor = tinycolor.random();
    console.log("random color is " + mainColor.toHex());

  }

  isLightColor = mainColor.isLight();


  analogousColors = mainColor.analogous();
  analogousColors = analogousColors.map(function(t) { return t.toHexString(); });
  console.log("analogousColors = " + analogousColors);

  monochromaticColors = mainColor.monochromatic();
  monochromaticColors = monochromaticColors.map(function(t) { return t.toHexString(); });
  console.log("monochromaticColors = " + monochromaticColors);

  splitcomplementColors = mainColor.splitcomplement();
  splitcomplementColors = splitcomplementColors.map(function(t) { return t.toHexString(); });
  console.log("splitcomplementColors = " + splitcomplementColors);

  triadColors = mainColor.triad();
  triadColors = triadColors.map(function(t) { return t.toHexString(); });
  console.log("triadColors = " + triadColors);

  tetradColors = mainColor.tetrad();
  tetradColors = tetradColors.map(function(t) { return t.toHexString(); });
  console.log("tetradColors = " + tetradColors);

  complementColors = mainColor.complement();
  //complementColors = complementColors.map(function(t) { return t.toHexString(); });
  console.log("complementColors = " + complementColors.toHexString());

  complementColors = [mainColor.toHexString(), complementColors.toHexString()];

}

// Change text color of HTML element
  var changeElementColor = function(element, color) {
    document.querySelector(element).style.color = color;
  };

  var createPalette = function() {


  // And apply them to the DOM
    for (var i = 1; i < 7; i++) {
      document.getElementById('analogouscolor' + i).style.backgroundColor = analogousColors[i-1];
      document.querySelectorAll('.analogoushex')[i - 1].style.color = analogousColors[i-1];
      document.querySelectorAll('.analogoushex')[i - 1].textContent = analogousColors[i-1];
    }

    for (var i = 1; i < 7; i++) {
      document.getElementById('monochromaticcolor' + i).style.backgroundColor = monochromaticColors[i-1];
      document.querySelectorAll('.monochromatichex')[i - 1].style.color = monochromaticColors[i-1];
      document.querySelectorAll('.monochromatichex')[i - 1].textContent = monochromaticColors[i-1];
    }

    for (var i = 1; i < 4; i++) {
      document.getElementById('splitcomplementcolor' + i).style.backgroundColor = splitcomplementColors[i-1];
      document.querySelectorAll('.splitcomplementhex')[i - 1].style.color = splitcomplementColors[i-1];
      document.querySelectorAll('.splitcomplementhex')[i - 1].textContent = splitcomplementColors[i-1];
    }

    for (var i = 1; i < 4; i++) {
      document.getElementById('triadcolor' + i).style.backgroundColor = triadColors[i-1];
      document.querySelectorAll('.triadhex')[i - 1].style.color = triadColors[i-1];
      document.querySelectorAll('.triadhex')[i - 1].textContent = triadColors[i-1];
    }


    for (var i = 1; i < 5; i++) {
      document.getElementById('tetradcolor' + i).style.backgroundColor = tetradColors[i-1];
      document.querySelectorAll('.tetradhex')[i - 1].style.color = tetradColors[i-1];
      document.querySelectorAll('.tetradhex')[i - 1].textContent = tetradColors[i-1];
    }

    for (var i = 1; i < 3; i++) {
      document.getElementById('complementcolor' + i).style.backgroundColor = complementColors[i-1];
      document.querySelectorAll('.complementhex')[i - 1].style.color = complementColors[i-1];
      document.querySelectorAll('.complementhex')[i - 1].textContent = complementColors[i-1];
    }

    changeElementColor('.instructions', analogousColors[2]);
    changeElementColor('.key1', analogousColors[5]);
    changeElementColor('.title', analogousColors[5]);
    changeElementColor('.input', analogousColors[5]);
    document.querySelector('.button').style.backgroundColor = analogousColors[2];

    for(var i = 0; i < document.querySelectorAll('.subtitle').length; i++ ) {
    document.querySelectorAll('.subtitle')[i].style.color = analogousColors[2];
  }


  if(isLightColor) {
    document.body.classList.add('darkBackground');
  }
  else {
    document.body.classList.remove('darkBackground');
  }



  }

  var generateClick = function() {
    let newPaletteColor = document.getElementById("mainColor").value;
    console.log("newPaletteColor = " + newPaletteColor);
    init(newPaletteColor);
  }


var init = function(newPalette) {
    //getRotation();
    setColors(newPalette);
    //drawCanvas();
    createPalette();
  };


  // Input number box
  document.getElementById('mainColor').addEventListener('input', function() {
    document.getElementById('mainColor').style.backgroundColor = document.getElementById('mainColor').value;
  }, false);

// Spacebar
  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 32) {
      init('yehp');
      e.preventDefault();
    }
  }, false);