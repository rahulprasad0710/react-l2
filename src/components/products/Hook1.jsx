import { useState } from "react";
import { QUANTITY_MAX_LIMIT } from "../../constants/ECOM";

const Hook1 = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity >= QUANTITY_MAX_LIMIT) {
            return;
        }

        setQuantity(quantity + 1);
    };
    const handleDecrease = () => {
        if (quantity <= 1) {
            return;
        }
        setQuantity(quantity - 1);
    };

    return (
        <div>
            <div className='container'>
                <h3 className='m-auto my-3 p-3'>Hook1</h3>
                <div>
                    <button
                        onClick={handleDecrease}
                        className={
                            quantity <= 1
                                ? "btn btn-sm btn-primary p-3 m-2 fw-bold disabled"
                                : "btn btn-sm btn-primary p-3 m-2 fw-bold "
                        }>
                        -
                    </button>
                    <span className='p-3 m-2'>{quantity}</span>
                    <button
                        onClick={handleIncrease}
                        className={
                            QUANTITY_MAX_LIMIT <= quantity
                                ? "btn btn-sm btn-primary p-3 m-2 fw-bold disabled"
                                : "btn btn-sm btn-primary p-3 m-2 fw-bold "
                        }>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hook1;
