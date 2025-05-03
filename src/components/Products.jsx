import data from '../data.json'

export default function Products({ quantities, setQuantities, clickedItems, setClickedItems }) {

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
        <div className='goods'>
            <h1>Desserts</h1>
            <div className="desserts">
                {data.map((item, index) => {
                    const isClicked = clickedItems.includes(index)
                    const quantity = quantities[index] || 1

                    return (
                        <div className='dessert' key={index} >
                            <div className='selected-dessert' onClick={() => handleClick(index)}>
                                <div className={isClicked ? 'dessert-image active' : 'dessert-image'}>
                                    <picture>
                                        <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
                                        <source media="(min-width: 640px)" srcSet={item.image.tablet} />
                                        <img src={item.image.mobile} alt="" />
                                    </picture>
                                </div>

                                <div className="cart-btn">
                                    {!isClicked ? 
                                        <div className="button">
                                            <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                                            <p>Add to Cart</p>
                                        </div> 
                                        :
                                        <div className="selected-button" onClick={(e) => e.stopPropagation()}>
                                            <div className='image' onClick={() => decrement(index)}>
                                                <svg className='active' xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                                            </div>
                                            <p>{quantity}</p>
                                            <div className='image' onClick={() => increment(index)}>
                                                <svg className='active' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                                            </div>
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
        </div>
    )
}