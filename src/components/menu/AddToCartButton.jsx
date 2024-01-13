export default function AddToCartButton({
    hasSizesOrExtras,
    onClick,
    basePrice,
}) {
    if (!hasSizesOrExtras) {
        return (
            <div className='btn mt-4 w-64 sm:w-auto lg:w-64 mx-auto'>
                <div
                    className='flex justify-around'
                    type='button'
                    onClick={onClick}>
                    <div>Add to cart:</div>
                    <div>${basePrice}</div>
                </div>
            </div>
        );
    }
    return (
        <div className='btn mt-4 w-64 sm:w-auto lg:w-64 mx-auto'>
            <div
                className='flex justify-around'
                type='button'
                onClick={onClick}>
                <div>Add to cart:</div>
                <div>from ${basePrice}</div>
            </div>
        </div>
    );
}
