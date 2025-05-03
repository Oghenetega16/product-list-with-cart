import data from '../data.json'
import { useEffect } from 'react'

export default function ConfirmModal({ clickedItems, quantities, totalPrice, onReset }) {

    useEffect(() => {
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [])

    return (
        <>
        <div className="modal-backdrop"></div>
        <div className="confirm">
            <img src="./assets/images/icon-order-confirmed.svg" alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>

            <div className="confirm-order">
                {clickedItems.map(index => {
                    const item = data[index]
                    const quantity = quantities[index] || 1
                    const itemTotal = (item.price * quantity).toFixed(2)

                    return (
                        <div className="confirm-items">
                            <div className="product">
                                <div className='thumbnail'><img src={item.image.thumbnail} alt="" /></div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{quantity}x <span>@ ${item.price.toFixed(2)}</span></p>
                                </div>
                            </div>
                            <p>${itemTotal}</p>
                        </div>
                    )
                })}

                <div className="total-price">
                    <p>Order Total</p>
                    <h2>${totalPrice.toFixed(2)}</h2>
                </div>
            </div>

            <div className="confirm-btn">
                <button onClick={onReset}>Start New Order</button>
            </div>
        </div>
        </>
    )
}