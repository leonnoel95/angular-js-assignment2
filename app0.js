(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var showListtobuy = this;
  showListtobuy.itemstobuy = ShoppingListService.getItemstobuy();
 console.log("ToBuyController contenu de  showListtobuy.itemstobuy ",showListtobuy.itemstobuy) ;

 showListtobuy.update = function (itemIndex) {
  console.log("appel de update() ") ;
//  showListtobuy.itemstobuy = ShoppingListService.getItemstobuy();
  console.log("contenu de showListtobuy.itemstobuy avant ",showListtobuy.itemstobuy) ;
  ShoppingListService.addItem(itemIndex);
  ShoppingListService.removeItem(itemIndex);
  console.log("contenu de showListtobuy.itemstobuy apres",showListtobuy.itemstobuy) ;
};
}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
   var showListbought = this;
   showListbought.itemsbought = ShoppingListService.getItemsbought();
   console.log("AlreadyBoughtController contenu de showListbought.itemsbought ",showListbought.itemsbought) ;
// $this.sayMessage = function () {
//   return "Yaakov likes to eat healthy snacks at night!";
// };

}

function ShoppingListService() {
  var service = this;
    var itemstobuy=[];
    var itemsbought=[];
  // List of shopping items
  itemstobuy[0]={name:"cookies", quantity:30}
  itemstobuy[1]={name:"sugars", quantity:58}
  itemstobuy[2]={name:"chocolates", quantity:62}
  itemstobuy[3]={name:"milk", quantity:62}
  itemstobuy[4]={name:"coffee", quantity:10}

  console.log("contenu de itemstobuy ",itemstobuy) ;

  service.addItem = function (itemIde) {
    var item=itemstobuy[itemIde];
    itemsbought.push(item);

  };

  service.removeItem = function (itemIdex) {
    itemstobuy.splice(itemIdex, 1);
  };

  service.getItemstobuy = function () {
    return itemstobuy;
  };

  service.getItemsbought = function () {
    return itemsbought;
  };
}

})();
