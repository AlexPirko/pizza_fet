import Image from 'next/image';
import { FaTrashCan, FaSquareMinus, FaSquarePlus } from 'react-icons/fa6';

import { cartProductPrice } from '../AppContext';

export default function CartProduct({ product, onRemove, onAdd, onSubtr }) {
    return (
        <div className='flex items-center gap-4 border-b py-4'>
            <div className='w-24'>
                <Image
                    width={240}
                    height={240}
                    src={product?.image}
                    alt={''}
                />
            </div>
            <div className='grow'>
                <h3 className='font-semibold'>{product?.name}</h3>
                {product?.size && (
                    <div className='text-sm'>
                        Size: <span>{product?.size?.name}</span>
                    </div>
                )}
                {product?.extras?.length > 0 && (
                    <div className='text-sm text-gray-500'>
                        {product?.extras.map((extra) => (
                            <div key={extra?.name}>
                                {extra?.name} ${extra?.price}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='flex items-center gap-1'>
                <button
                    disabled={product?.quantity > 1 ? false : true}
                    onClick={() => onSubtr(product._id)}>
                    <FaSquareMinus size={20} />
                </button>
                {product.quantity}
                <button onClick={() => onAdd(product?._id)}>
                    <FaSquarePlus size={20} />
                </button>
            </div>
            <div className='text-lg font-semibold'>
                ${cartProductPrice(product)}
            </div>
            {!!onRemove && (
                <div className='ml-2'>
                    <button
                        type='button'
                        onClick={() => onRemove(product?._id)}
                        className='p-2'>
                        <FaTrashCan />
                    </button>
                </div>
            )}
        </div>
    );
}
