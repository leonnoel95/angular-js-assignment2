(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController',ToBuyController)
.factory('ShoppingListFactory',ShoppingListFactory)
// .service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListFactory'];
function ToBuyController(ShoppingListFactory) {
  var showList = this;
  var ShoppingList = ShoppingListFactory();
  console.log("ToBuyController contenu de ShoppingList",ShoppingList) ;
  showList.itemstobuy = ShoppingList.getItemstobuy();
 console.log("ToBuyController contenu de  showList.itemstobuy ",showList.itemstobuy) ;

  showList.update = function (itemIndex) {
  console.log("appel de update() ") ;
//  showListtobuy.itemstobuy = ShoppingListService.getItemstobuy();
  console.log("contenu de showList.itemstobuy avant ",showList.itemstobuy) ;
  ShoppingList.addItem(itemIndex);
  ShoppingList.removeItem(itemIndex);
  console.log("contenu de showList.itemstobuy apres",showList.itemstobuy) ;
  showList.itemsbought = ShoppingList.getItemsbought();
  console.log("contenu de showList.itemsbought apres",  showList.itemsbought) ;
  }
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

function ShoppingListFactory() {
  var factory = function() {
  return new ShoppingListService();
};
return factory;
}

})();
