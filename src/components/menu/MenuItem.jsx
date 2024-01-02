import Image from 'next/image';

const MenuItem = () => {
    return (
        <div className='bg-light px-4 py-8 rounded-xl text-center shadow-md shadow-black/5 hover:bg-white hover:shadow-black/10 transition-all duration-300'>
            <div className='flex items-center justify-center'>
                <Image
                    src='/pizza_hero.png'
                    width={280}
                    height={280}
                    alt='pizza Classic'
                />
            </div>
            <h3 className='text-xl font-semibold my-3'>Pizza Classic</h3>
            <p className='text-dark/80 text-sm'>
                Pizza with creamy sauce, Italian mozzarella, ham, olives,
                chicken fillet, gorgonzola, onions, dough made from high-quality
                Italian flour according to the signature recipe.
            </p>
            <h4 className='text-2xl my-2'>$12.00</h4>
            <button className='btn !px-12 my-2'>
                Add to Cart
            </button>
        </div>
    );
};

export default MenuItem;
