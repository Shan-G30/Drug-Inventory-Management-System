function purchaseProduct() {
    const productCode = document.getElementById("productCode").value;
    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const costPrice = document.getElementById("costPrice").value;
    const sellingPrice = document.getElementById("sellingPrice").value;
    
    // You can add your logic for purchasing a product here.
    alert(`Purchased ${productName} (${productCode}) with quantity ${quantity}`);
}

function deleteProduct() {
    const productCode = document.getElementById("productCode").value;
    
    // You can add your logic for deleting a product here.
    alert(`Deleted Product: ${productCode}`);
}
