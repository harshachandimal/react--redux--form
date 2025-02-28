import ProductBasicDeatilsForm from "./ProductBasicDetailsForm/ProductBasicDeatilsForm.jsx";
import ProductWarrantyDeatilsForm from "./ProductWarrantyDetailsForm/ProductWarrantyDeatilsForm.jsx";
import {useState} from "react";

const ProductForm = () => {
  const [Form, setForm] = useState(1)

  const handleNextForm = () => {
    setForm(prevState => prevState + 1)
  }

  const handleBackForm = () => {
    setForm(prevState => prevState - 1)
  }

  const productFormMapper =  {
    1 : <ProductBasicDeatilsForm handleNextForm={handleNextForm} />,
    2 : <ProductWarrantyDeatilsForm handleBackForm={handleBackForm} />
  }

  const RenderForms = () => {
    return productFormMapper[Form];
  }

  return (
    <div className="mt-9  ">
      {RenderForms()}

    </div>
  );
};

export default ProductForm;
