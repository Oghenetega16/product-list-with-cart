import data from '/public/data.json'

export default function Products() {
    return (
        <>
            <h1>Desserts</h1>
            <div className="desserts">
                {data.map((item, index) => (
                <div className="dessert" key={index}>
                    <div className="dessert-image">
                        <img src={item.image.mobile} alt=''/>
                    </div>
                    <div className="cart-btn">
                        <div className="button">
                            <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                            <p>Add to Cart</p>
                        </div>
                    </div>
                    
                    <div className="dessert-desc">
                        <span>{item.category}</span>
                        <p className="name">{item.name}</p>
                        <p className="price">${item.price}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}