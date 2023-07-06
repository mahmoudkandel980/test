import React from "react";

import SpecificProduct from "../components/supplier/product/SpecificProduct";
import OthersProducts from "../components/supplier/product/OthersProducts";
import RelatedSuppliers from "../components/relatedSuppliers/RelatedSuppliers";
import MessageForSupplier from "../components/supplier/form/MessageForSupplier";

const product = () => {
    return (
        <div className='container mx-auto mt-10 relative'>
            <SpecificProduct />
            <OthersProducts />
            <RelatedSuppliers />
            <MessageForSupplier />
        </div>
    );
};

export default product;
