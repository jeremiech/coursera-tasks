var customerList = [];

const addCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  customerList.map(all=>all[0]).find(id=>id==CustomerId)?[]:customerList.push([CustomerId,
    CustomerName,
    CustomerAge,
    CustomerAddress,
    CustomerContactNumber,
    Category])
  
};

const updateCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => 
{
  customerList[1][4] = CustomerContactNumber
  customerList[0][1] = CustomerName
  customerList[2][2]=CustomerAge
  
};
const getAllCustomers = () => {
  // Write the Logic here
  return customerList;
};

module.exports = { addCustomer, updateCustomer, getAllCustomers };
