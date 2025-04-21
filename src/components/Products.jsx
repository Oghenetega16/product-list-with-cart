import { useState } from 'react'
import data from '/public/data.json'

export default function Products() {

    const [clickedItems, setClickedItems] = useState([])
    const [quantities, setQuantities] = useState({})

    function increment(index) {
        setQuantities(prev => ({
            ...prev,
            [index]: (prev[index] || 1) + 1
        }))
    }

    function decrement(index) {
        setQuantities(prev => ({
            ...prev,
            [index]: Math.max((prev[index] || 1) - 1, 1)
        }))
    }

    function handleClick(index) {
        setClickedItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        )
        setQuantities(prev => ({
            ...prev,
            [index] : prev[index] || 1
        }))
    }

    return (
        <>
            <h1>Desserts</h1>
            <div className="desserts">
                {data.map((item, index) => {
                    const isClicked = clickedItems.includes(index)
                    const quantity = quantities[index] || 1

                    return (
                        <div className='dessert' key={index} >
                            <div className='selected-dessert' onClick={() => handleClick(index)}>
                                <div className={isClicked ? 'dessert-image active' : 'dessert-image'}>
                                    <img src={item.image.mobile} alt=''/>
                                </div>

                                <div className="cart-btn">
                                    {!isClicked ? 
                                    <div className="button">
                                        <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                                        <p>Add to Cart</p>
                                    </div> : 

                                    <div className="selected-button" onClick={(e) => e.stopPropagation()}>
                                        <div className='image' onClick={() => decrement(index)}><img src="./assets/images/icon-decrement-quantity.svg" alt="minus icon" /></div>
                                        <p>{quantity}</p>
                                        <div className='image' onClick={() => increment(index)}><img src="./assets/images/icon-increment-quantity.svg" alt="plus icon" /></div>
                                    </div>
                                    }
                                </div>
                            </div>
                            
                            <div className="dessert-desc">
                                <span>{item.category}</span>
                                <p className="name">{item.name}</p>
                                <p className="price">${item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}