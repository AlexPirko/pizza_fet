export default function AddToCartButton({
    hasSizesOrExtras,
    onClick,
    basePrice,
}) {
    if (!hasSizesOrExtras) {
        return (
            <div className='btn mt-4 w-64 mx-auto'>
                <div
                    className='flex justify-around'
                    onClick={onClick}>
                    <div>Add to cart:</div><div>${basePrice}</div>
                </div>
            </div>
        );
    }
    return (
        <div className='btn mt-4 w-64 mx-auto'>
            <div
                type='button'
                onClick={onClick}
                className='flex justify-around'>
                <div>Add to cart:</div><div>from ${basePrice}</div>
            </div>
        </div>
    );
}
