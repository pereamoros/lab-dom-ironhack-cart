'use strict';

function deleteItem(event){
  event.currentTarget.parentNode.remove();
  getTotalPrice();
}

function getTotalPrice() {
  var productList = document.querySelectorAll('.product-item');
  var totalPriceContainer = document.getElementById('total-price');
  var totalPrice = 0;

  for(var i = 0; i < productList.length; i++){
    var productPrice = productList[i].querySelector('.product-cost');
    var productQty = productList[i].querySelector('.product-quantity');
    var productTotal = productList[i].querySelector('.product-total');

    var totalProductPrice = Math.round((Number(productPrice.textContent) * productQty.value)*100)/100;
    totalPrice += totalProductPrice;
    productTotal.innerText = totalProductPrice;
    
  }

  totalPriceContainer.innerHTML = totalPrice;

}

function createItemName(product){
  var newProductName = document.createElement('div');
  var productNameSpan = document.createElement('span');
  var productNameInput = document.getElementById('create-name').value;
  newProductName.setAttribute('class', 'product-name');
  productNameSpan.innerText = productNameInput;
  newProductName.appendChild(productNameSpan);
  product.appendChild(newProductName);
}

function createPriceTag(product){
  var newPriceTag = document.createElement('div');
  newPriceTag.setAttribute('class', 'product-cost');
  var productPriceSpan = document.createElement('span');
  var productPriceInput = document.getElementById('create-price').value;
  productPriceSpan.innerText = productPriceInput;
  newPriceTag.appendChild(productPriceSpan);

  product.appendChild(newPriceTag);
}

function createQuantityInput(product){
  var newQtyInput = document.createElement('div');
  newQtyInput.classList.add('product-qty');
  var newLabel = document.createElement('label');
  newLabel.classList.add('quantity');
  newLabel.innerText = "QTY";
  var newInput = document.createElement('input');
  newInput.classList.add('product-quantity');
  newInput.setAttribute('value', 0);
  newInput.setAttribute('type', 'number');
  newQtyInput.appendChild(newLabel);
  newQtyInput.appendChild(newInput);
  product.appendChild(newQtyInput);
}

function createQuantityNode(product){
  var newQtyNode = document.createElement('div');
  var qtySpan = document.createElement('span');
  qtySpan.classList.add('product-total');
  qtySpan.innerText = "0";
  newQtyNode.appendChild(qtySpan);
  product.appendChild(newQtyNode);
}

function createDeleteButton(product){
  var newDeleteButton = document.createElement('div');
  newDeleteButton.classList.add('btn', 'btn-delete');
  var buttonSpan = document.createElement('span');
  buttonSpan.innerText = "Delete";
  newDeleteButton.appendChild(buttonSpan);
  product.appendChild(newDeleteButton);
}
// function getPriceByProduct(itemNode){}

// function updatePriceByProduct(productPrice, index){}

// function createItemNode(dataType, itemData){}

// function createNewItemRow(itemName, itemUnitPrice){}

function createNewItem(){
  var productList = document.getElementById('product-list');
  var newProduct = document.createElement('div');
  newProduct.setAttribute('class', 'product-item');
  
  createItemName(newProduct);
  createPriceTag(newProduct);
  createQuantityInput(newProduct);
  createQuantityNode(newProduct)
  createDeleteButton(newProduct);
  productList.appendChild(newProduct);

  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
