var category = function category(key) {
  // Write the Logic here
  let category=""
  switch (key) {
    case 'pl':
      category = "Personal Loan"
      break;
    case 'Vl':
      category = "Vehicle Loan"
      break
    case 'EL':
      category = "Education Loan"
      break
    case 'hL':
      category = "Home Loan"
      break
      
  }
  return category
};
  
  module.exports = {
    category: category
  };