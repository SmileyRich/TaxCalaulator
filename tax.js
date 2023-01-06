const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate/100; 
    return taxAmount; 
};