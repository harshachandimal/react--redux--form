import ProductBasicDetailsForm from "./ProductBasicDetailsForm/ProductBasicDetailsForm.jsx";
import ProductWarrantyDetailsForm from "./ProductWarrantyDetailsForm/ProductWarrantyDetailsForm.jsx";
import { useState } from "react";

const ProductForm = () => {
  const [Form, setForm] = useState(1);
  const [ProductDetails, setProductDetails] = useState({
    ProductName: "",
    product_quantity: 0,
    product_price: 0,
  });


  const handleNextForm = () => {
    setForm((prevState) => prevState + 1);
  };

  const handleBackForm = () => {
    setForm((prevState) => prevState - 1);
  };

  const productFormMapper = {
    1: (
      <ProductBasicDetailsForm
        ProductDetails={ProductDetails}
        handleNextForm={handleNextForm}
        setProductDetails={setProductDetails}
      />
    ),
    2: <ProductWarrantyDetailsForm handleBackForm={handleBackForm} />,
  };

  const RenderForms = () => {
    return productFormMapper[Form];
  };

  return <div className="mt-9  ">{RenderForms()}</div>;
};

export default ProductForm;
