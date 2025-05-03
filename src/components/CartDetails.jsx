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

    const handleStartNewOrder = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        confirmOrder()
    }
    
    return (
        <div className="cart-details">
            <h2>Your Cart ({(clickedItems.length)})</h2>
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
                                    <div className="remove" onClick={() => handleRemove(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
                                    </div>
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
                        <button onClick={()=> handleStartNewOrder()}>Confirm Order</button>
                    </div>
                </>
            }
        </div>
    )
}