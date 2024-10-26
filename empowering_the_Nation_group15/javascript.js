function updateTotal() {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    let subtotal = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const price = parseFloat(checkbox.getAttribute('data-price'));
            subtotal += price;
        }
    });

    const discount = subtotal * 0.05; 
    const total = subtotal - discount; 

    
    document.getElementById('subtotal').textContent = `R${subtotal.toFixed(2)}`;
    document.getElementById('discount').textContent = `R${discount.toFixed(2)}`;
    document.getElementById('total').textContent = `R${total.toFixed(2)}`;
}
