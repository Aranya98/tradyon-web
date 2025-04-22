const SubProducts = ({ product }) => {
    if (!product) {
        return (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                Select a product to view its subproducts
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow p-3">
            <h2 className="text-xl font-bold mb-4">
                {product.title} - Subproducts
            </h2>
            <div className="h-[400px] overflow-y-auto pr-2 scrollbar-green">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.subProducts.map((subProduct) => (
                        <div
                            key={subProduct.id}
                            className="bg-gray-50 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                        >
                            <img
                                src={subProduct.image}
                                alt={subProduct.name}
                            />
                            <h3 className="font-bold text-gray-800">{subProduct.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                {subProduct.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubProducts;