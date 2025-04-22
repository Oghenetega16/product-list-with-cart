export default function CartDetails() {
    return (
        <div className="cart-details">
            <h2>Your Cart (0)</h2>
            {/* <div className="cart-image">
                <img src="./assets/images/illustration-empty-cart.svg" alt="" />
            </div>
            <p>Your added items will appear here</p> */}
            <div className="cart-items">
                <div className="cart-values">
                    <div className="item">
                        <h4>Classic Tiramisu</h4>
                        <p>1x <span className="unit-price">@ $5.50</span> <span className="whole-price">$5.50</span></p>
                    </div>
                    <div className="remove"><img src="./assets/images/icon-remove-item.svg" alt="remove icon" /></div>
                </div>
            </div>
            <div className="total-price">
                <p>Order Total</p>
                <h2>$46.50</h2>
            </div>
            <div className="delivery-type">
                <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                <p>This is a <span>carbon-neutral</span> delivery</p>
            </div>
            <div className="confirm-btn">
                <button>Confirm Order</button>
            </div>
        </div>
    )
}