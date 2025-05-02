import { useState } from 'react'
import Products from './components/Products'
import CartDetails from './components/CartDetails'
import ConfirmModal from './components/ConfirmModal'
import data from './data.json'

export default function App() {
    const [clickedItems, setClickedItems] = useState([])
    const [quantities, setQuantities] = useState({})
    const [confirm, setConfirm] = useState(false)

    const totalPrice = clickedItems.reduce((total, index) => {
        const item = data[index]
        const quantity = quantities[index] || 1
        return total + (item.price * quantity)
    }, 0)

    function handleReset() {
        setClickedItems([])
        setQuantities({})
        setConfirm(false)
    }

    return (
        <>
            <main>
                <Products clickedItems={clickedItems} setClickedItems={setClickedItems} quantities={quantities} setQuantities={setQuantities} />
                <CartDetails clickedItems={clickedItems} setClickedItems={setClickedItems} quantities={quantities} setQuantities={setQuantities} confirm={confirm} setConfirm={setConfirm} totalPrice={totalPrice} />
            </main>
            {confirm === true && <ConfirmModal clickedItems={clickedItems} quantities={quantities} totalPrice={totalPrice} onReset={handleReset} />}
        </>
    )
}

