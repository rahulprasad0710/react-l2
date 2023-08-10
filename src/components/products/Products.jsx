import React from "react";

const Products = () => {
    const p1 = {
        id: 602707,
        all_offer_price: 1249,
        description: "",
        category: "T-Shirt",
        color: ["green"],
        design: "Graphic Print",
        display_image:
            "men-s-green-action-team-graphic-printed-oversized-t-shirt-602707-1690265819-1.jpg",
        product_sizes: [
            {
                id: 1255991,
                name: "S",
                stock_status: false,
            },
            {
                id: 1255996,
                name: "M",
                stock_status: true,
            },
            {
                id: 1256003,
                name: "L",
                stock_status: true,
            },
            {
                id: 1256007,
                name: "XL",
                stock_status: true,
            },
        ],
        stock_status: true,
        member_price: 639,
        mrp: 1249,
        name: "Men's Green Action Team Graphic Printed Oversized T-shirt",
        custom_name:
            "Men's Green Action Team Graphic Printed Oversized T-shirt",
        price: 699,
        ptype: "single",
        subclass: "T-Shirt",
        url: "mens-green-action-team-graphic-printed-oversized-t-shirt",
    };

    return (
        <div>
            Products
            <h3>Name: {p1.name}</h3>
            <h5>Price: {p1.mrp}</h5>
            <div>
                product Sizes
                {p1.product_sizes.map((item, index) => {
                    return (
                        <h6 key={item.id}>
                            <h2>{index}</h2>
                            {item.name}
                        </h6>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
