import data from '../data.json'

export default function CartDetails({ clickedItems, quantities, setClickedItems, setQuantities, confirm, setConfirm, totalPrice }) {
    
    const handleRemove = (index) => {
        setClickedItems(prev => prev.filter(i => i !== index))
        setQuantities(prev => {
            const newQuantities = { ...prev }
            delete newQuantities[index]
            return newQuantities
        })
    }

    function confirmOrder() {
        setConfirm(!confirm)
    }
    
    return (
        <div className="cart-details">
            <h2>Your Cart <span>({(clickedItems.length)})</span></h2>
            {(clickedItems.length) === 0 ? 
                <>
                    <div className="cart-image">
                        <img src="./assets/images/illustration-empty-cart.svg" alt="" />
                    </div>
                    <p>Your added items will appear here</p>
                </>
                : 
                <>
                    <div className="cart-items">
                        {clickedItems.map(index => {
                            const item = data[index]
                            const quantity = quantities[index] || 1
                            const itemTotal = (item.price * quantity).toFixed(2)
                            
                            return (
                                <div className="cart-values" key={index}>
                                    <div className="item">
                                        <h4>{item.name}</h4>
                                        <p>{quantity}x
                                            <span className="unit-price">@ ${item.price.toFixed(2)}</span>
                                            <span className="whole-price">${itemTotal}</span>
                                        </p>
                                    </div>
                                    <div className="remove" onClick={() => handleRemove(index)}><img src="./assets/images/icon-remove-item.svg" alt="remove icon" /></div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="total-price">
                        <p>Order Total</p>
                        <h2>${totalPrice.toFixed(2)}</h2>
                    </div>
                    <div className="delivery-type">
                        <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                        <p>This is a <span>carbon-neutral</span> delivery</p>
                    </div>
                    <div className="confirm-btn">
                        <button onClick={()=> confirmOrder()}>Confirm Order</button>
                    </div>
                </>
            }
        </div>
    )
}