import { FaChevronUp } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
import { useState } from 'react';

export default function MenuItemPriceProps({
    name,
    addLabel,
    props,
    setProps,
}) {
    const [isOpen, setIsOpen] = useState(false);

    function addProp() {
        setProps((oldProps) => {
            return [...oldProps, { name: '', price: 0 }];
        });
    }

    function editProp(ev, index, prop) {
        const newValue = ev.target.value;
        setProps((prevSizes) => {
            const newSizes = [...prevSizes];
            newSizes[index][prop] = newValue;
            return newSizes;
        });
    }

    function removeProp(indexToRemove) {
        setProps((prev) => prev.filter((v, index) => index !== indexToRemove));
    }

    return (
        <div className='bg-gray-200 p-2 rounded-md mb-2'>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className='inline-flex p-1 border-0 justify-start items-center'
                type='button'>
                {isOpen && (
                    <FaChevronUp
                        size={20}
                        className='mr-1'
                    />
                )}
                {!isOpen && <FaChevronDown size={20} />}
                <span>{name}</span>
                <span>({props?.length})</span>
            </button>
            <div className={isOpen ? 'block' : 'hidden'}>
                {props?.length > 0 &&
                    props.map((size, index) => (
                        <div
                            key={index}
                            className='flex items-end gap-2'>
                            <div>
                                <label>Name</label>
                                <input
                                    type='text'
                                    placeholder='Size name'
                                    value={size?.name}
                                    onChange={(e) => editProp(e, index, 'name')}
                                />
                            </div>
                            <div>
                                <label>Extra price</label>
                                <input
                                    type='text'
                                    placeholder='Extra price'
                                    value={size?.price}
                                    onChange={(e) =>
                                        editProp(e, index, 'price')
                                    }
                                />
                            </div>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => removeProp(index)}
                                    className='btn__outline mb-3 !px-3'>
                                    <FaTrashCan size={24} />
                                </button>
                            </div>
                        </div>
                    ))}
                <button
                    type='button'
                    onClick={addProp}
                    className='btn__outline flex items-center justify-center w-full'>
                    <FaPlus
                        size={18}
                        className='mb-0.5 mr-2'
                    />
                    <span>{addLabel}</span>
                </button>
            </div>
        </div>
    );
}
