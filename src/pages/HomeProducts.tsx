import { useEffect, useState } from "react";
import type { Product } from "../interfaces/Product";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

function HomeProducts() {
    const [products, setProducts] = useState<Product[]>([
        {
            name: "Keyboard",
            price: 200,
            quantity: 20,
            description: "This is a custom keyboard",
            img: "https://img.freepik.com/foto-gratis/espacio-fiesta-esta-listo-celebracion-linea_23-2149347240.jpg?semt=ais_user_personalization&w=740&q=80",
        },
        {
            name: "Mouse",
            price: 25000,
            quantity: 10,
            description: "This is a custom mouse",
            img: "https://organicblank.com/cdn/shop/collections/mo2222-06-top.png?v=1769611784",
        },
        {
            name: "Monitor",
            price: 16700,
            quantity: 23,
            description: "This is a custom monitor",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNC9Iwr-34kiFFRzDZYP1WyGmfXgKiw7ofBw&s",
        },
        {
            name: "PC",
            price: 15800,
            quantity: 18,
            description: "This is a custom PC",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-JUi4Pt8WjSRg2XgBCTYcUtgVLzM1gCHWw&s",
        },
    ]);

    // useEffect(() => {
    //     fetch("/src/products.json")
    //         .then((response) => response.text())
    //         .then((jsonString) => {
    //             const dataObject = JSON.parse(jsonString);
    //             setProducts(dataObject);
    //         });
    // });

    return (
        <>
            <Header title="Products"></Header>
            <div className="m-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <ProductCard
                            key={index}
                            description={product.description}
                            title={product.name}
                            subtitle={product.price.toLocaleString()}
                            quantity={product.quantity.toLocaleString()}
                            img={product.img}></ProductCard>
                    ))
                ) : (
                    <h1>No items</h1>
                )}
            </div>
        </>
    );
}

export default HomeProducts;
