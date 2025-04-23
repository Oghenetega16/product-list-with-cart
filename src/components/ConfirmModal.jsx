export default function ConfirmModal() {
    return (
        <div className="confirm">
            <img src="" alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>

            <div className="confirm-order">
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4>Classic Tiramisu</h4>
                        <p>1x <span>@5.50</span></p>
                    </div>
                    <p>$5.50</p>
                </div>
                <div className="total-price">
                    <p>Order Total</p>
                    <h2>$46.50</h2>
                </div>
            </div>

            <div className="confirm-btn">
                <button>Start New Order</button>
            </div>
        </div>
    )
}