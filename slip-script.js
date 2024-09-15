document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;
    
    const totalAmountField = document.getElementById('total-amount');
    const dateField = document.getElementById('slip-date');
    
    // Calculate total amount and set date
    const amounts = JSON.parse(localStorage.getItem('transactions') || '[]').map(transaction => transaction.amount);
    const totalAmount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    totalAmountField.value = `$${totalAmount}`;
    dateField.value = new Date().toLocaleDateString();

    document.getElementById('download-slip').addEventListener('click', () => {
        // Create the PDF
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text("Transaction Slip", 10, 10);
        doc.setFontSize(16);
        doc.text(`Total Balance: ${totalAmountField.value}`, 10, 20);
        doc.text(`Date: ${dateField.value}`, 10, 30);
        
        // Save the PDF
        doc.save("transaction-slip.pdf");
    });
});
