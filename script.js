

// ---preserve jar price--- 
// pickle any vegi -> 2 × Base Vegetable Price + 50 -> time - 4000m (2-3 days)
// Jelly - Any fruit (1) -> 2 × Base Fruit Price + 50 -> time - 4000m (2-3 days)

//---Keg---
// Juice - Vegi -> 2.25 × Vegetable Base Price -> time - 6000 mins (4 Days)
// Wine - Any Fruit -> 3 × Fruit Base Price ->  10000 mins (6.25 Days)


function myFunction() {
    const selectedCorp = document.getElementById("Crops").value;
    console.log(selectedCorp);
    
    // Spring Corp
  
    var Cauliflower = 175;
    var CoffeeBean =  15;
    var Garlic =  60;
    var GreenBean = 40;
    var Kale = 110;
    var Parsnip =35; 
    var Potato = 80;
    var Rhubarb = 220;
    var Strawberry = 120;
    //Summer Corps
    var Blueberry = 50;
    var Corn = 50;
    var Hops = 25;
    var HotPepper = 40;
    var Melon = 250;
    var Radish = 90;
    var RedCabbage = 260;
    var StarFruit = 750;
    var Tomato = 60;

    //Fall Corps
    var Amaranth = 150;
    var Artichoke = 160;
    var Beet = 100;
    var BokChoy = 80;
    var Cranberry = 75;
    var Eggplant = 60;
    var Grape = 80;
    var Pumpkin = 320;
    var Yam = 160;
    // Fruits
    
    var Apple = 100 ;
    var Apricot =50 ;
    var Cherry = 80 ;
    var Pomegranate = 140 ;
    var Peach = 140 ;
    var Orange = 100;
    var StarFruit = 750;
    
    var JarProduce;
    var KegProduce;
    var sellPrice;
    var KegPrice;
    var JarPrice;
    var KegProfit;
    var KegTime;

    switch(selectedCorp) {
      case "Parsnip":
        sellPrice = Parsnip;
        var JarPrice = Parsnip * 2 + 50;
        var KegPrice = Parsnip * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
    
      break;
      case "Cauliflower":
        sellPrice = Cauliflower;
          var JarPrice = 175 * 2 + 50;
          var KegPrice = 175 * 2.25;
          var JarTime = "2-3days(4000 mins)";
          var JarProfit= Number.parseInt(JarPrice / 3);
          var KegTime = " 4 Days(6000 mins)"
          var KegProfit = + Number.parseInt(KegPrice / 4);
   
      break;
      // case "CoffeeBean":
      //   sellPrice = CoffeeBean;
      //   var JarPrice = " >_< CoffeeBean is not for the keg >_<"
      //   var KegPrice = 150;
      // break;
      case "Garlic":
        sellPrice = Garlic;
        var JarPrice = Garlic * 2 + 50;
        var KegPrice = Garlic * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "GreenBean":
        sellPrice = GreenBean;
        var JarPrice = GreenBean * 2 + 50;
        var KegPrice = GreenBean * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit =  Number.parseInt(KegPrice / 4);
      break;
      case "Kale":
        sellPrice = Kale;
        var JarPrice = 110 * 2 + 50;
        var KegPrice = 110 * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 4);
      break;
      case "Potato":
        sellPrice = Garlic;
        var JarPrice = Garlic * 2 + 50;
        var KegPrice = Garlic * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "Rhubarb":
        sellPrice = Rhubarb;
        var JarPrice = Rhubarb* 2 + 50;
        var KegPrice = Rhubarb* 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit =  Number.parseInt(KegPrice / 4);
      break;
      case "Strawberry":
        sellPrice = Strawberry;
        var JarPrice = Strawberry * 2 + 50;
        var KegPrice = Strawberry * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      // Summer Corp
      case "Blueberry":
        sellPrice = Blueberry;
        var JarPrice = Blueberry * 2 + 50;
        var KegPrice = Blueberry * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Corn":
        sellPrice = Corn;
        var JarPrice = Corn * 2 + 50;
        var KegPrice = Corn * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "Melon":
        sellPrice = Melon;
        var JarPrice = Melon * 2 + 50;
        var KegPrice = Melon * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Hops":
        // sellPrice = Hops;
        // var JarPrice = "Not available";
        // var KegPrice = 300 ;
        // var JarTime = "2-3days(4000 mins)";
        // var JarProfit= Number.parseInt(JarPrice / 3);
        // var KegTime = " 4 Days(6000 mins)"
        // var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "HotPepper":
        sellPrice = HotPepper;
        var JarPrice = HotPepper * 2 + 50;
        var KegPrice = HotPepper * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "Radish":
        sellPrice = Radish;
        var JarPrice = Radish * 2 + 50;
        var KegPrice = Radish * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "RedCabbage":
        sellPrice = RedCabbage;
        var JarPrice = RedCabbage * 2 + 50;
        var KegPrice = RedCabbage * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;
      case "Tomato":
        sellPrice = Tomato;
        var JarPrice = Tomato * 2 + 50;
        var KegPrice = Tomato * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = " 4 Days(6000 mins)"
        var KegProfit = + Number.parseInt(KegPrice / 4);
      break;

    //Fall Corps

    case "Amaranth":
      sellPrice = Amaranth;
      var JarPrice = Amaranth * 2 + 50;
      var KegPrice = Amaranth * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break;

    case "Artichoke":
      sellPrice = Artichoke;
      var JarPrice = Artichoke  * 2 + 50;
      var KegPrice = Artichoke  * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break;

    case "Beet":
      sellPrice = Beet;
      var JarPrice = Beet * 2 + 50;
      var KegPrice = Beet * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break
    case "BokChoy":
      sellPrice = BokChoy;
      var JarPrice = BokChoy * 2 + 50;
      var KegPrice = BokChoy * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break

    case "Cranberry":
      sellPrice = Cranberry;
      var JarPrice = 120 * 2 + 50;
      var KegPrice = 120 * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = "  6.25 Days(10000 mins)"
      var KegProfit = Number.parseInt(KegPrice / 6.25);
    break;
    case "Eggplant":
      sellPrice = Eggplant;
      var JarPrice = Eggplant * 2 + 50;
      var KegPrice = Eggplant * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break

    case "Grape":
      sellPrice = Grape;
      var JarPrice = Grape * 2 + 50;
      var KegPrice = Grape * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = "  6.25 Days(10000 mins)"
      var KegProfit = Number.parseInt(KegPrice / 6.25);
    break;

    case "Pumpkin":
      sellPrice = Pumpkin;
      var JarPrice = Pumpkin * 2 + 50;
      var KegPrice = Pumpkin* 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break

    case "Yam":
      sellPrice = Yam;
      var JarPrice = Yam * 2 + 50;
      var KegPrice = Yam * 2.25;
      var JarTime = "2-3days(4000 mins)";
      var JarProfit= Number.parseInt(JarPrice / 3);
      var KegTime = " 4 Days(6000 mins)"
      var KegProfit = + Number.parseInt(KegPrice / 4);
    break

      // Fruit Tree
      case "Apple":
        sellPrice = Apple;
        var JarPrice = Apple * 2 + 50;
        var KegPrice = Apple * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Apricot":
        sellPrice = Apricot;
        var JarPrice = Apricot * 2 + 50;
        var KegPrice = Apricot * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Cherry":
        sellPrice = Cherry;
        var JarPrice = Cherry * 2 + 50;
        var KegPrice = Cherry * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Peach":
        sellPrice = Peach;
        var JarPrice = Peach * 2 + 50;
        var KegPrice = Peach * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Pomegranate":
        sellPrice = Pomegranate;
        var JarPrice = Pomegranate * 2 + 50;
        var KegPrice = Pomegranate * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      case "Orange":
        sellPrice = Orange;
        var JarPrice = Orange * 2 + 50;
        var KegPrice = Orange * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;
      
      case "StarFruit":
        sellPrice = StarFruit;
        var JarPrice = 750 * 2 + 50;
        var KegPrice = 750 * 2.25;
        var JarTime = "2-3days(4000 mins)";
        var JarProfit= Number.parseInt(JarPrice / 3);
        var KegTime = "  6.25 Days(10000 mins)"
        var KegProfit = Number.parseInt(KegPrice / 6.25);
      break;


      default:
      text = " ";
    }

    console.log(JarPrice);
    console.log(KegPrice);
    console.log(selectedCorp);
   

  document.getElementById("demo").innerHTML =  selectedCorp;
  document.getElementById("demoSell").innerHTML = "The "+ selectedCorp +" is worth $ "+ sellPrice;
  document.getElementById("demoJar").innerHTML = "$"+ JarPrice;
  document.getElementById("demoKeg").innerHTML = "$ "+ KegPrice;
  document.getElementById("demoJarTime").innerHTML = JarTime ;
  document.getElementById("demoJarProfit").innerHTML = "$" + JarProfit;
  document.getElementById("demoKegTime").innerHTML = KegTime ;
  document.getElementById("demoKegProfit").innerHTML = "$"+ KegProfit;


  }




