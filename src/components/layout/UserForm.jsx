'use client';
import { useState } from 'react';

import { useProfile } from '@/libs/hooks/useProfile';
import AddressInputs from './AddressInputs';
import EditableImage from './EditableImage';

export default function UserForm({ user, onSave }) {
    const [userName, setUserName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [streetAddress, setStreetAddress] = useState(
        user?.streetAddress || '',
    );
    const [admin, setAdmin] = useState(user?.admin || false);
    const { data: loggedInUserData } = useProfile();

    function handleAddressChange(propName, value) {
        if (propName === 'phone') setPhone(value);
        if (propName === 'streetAddress') setStreetAddress(value);
    }

    return (
        <div className='md:flex gap-4'>
            <div>
                <div className='p-2 rounded-lg relative max-w-[120px]'>
                    <EditableImage
                        link={image}
                        setLink={setImage}
                    />
                </div>
            </div>
            <form
                className='grow'
                onSubmit={(e) =>
                    onSave(e, {
                        name: userName,
                        image,
                        phone,
                        admin,
                        streetAddress,
                    })
                }>
                <label>First and last name</label>
                <input
                    type='text'
                    placeholder='First and last name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type='email'
                    disabled={true}
                    value={user?.email}
                    placeholder={'email'}
                />
                <AddressInputs
                    addressProps={{
                        phone,
                        streetAddress,
                    }}
                    setAddressProp={handleAddressChange}
                />
                {loggedInUserData.admin && (
                    <div>
                        <label
                            className='p-2 inline-flex items-center gap-2 mb-2'
                            htmlFor='adminCb'>
                            <input
                                id='adminCb'
                                type='checkbox'
                                className=''
                                value={'1'}
                                checked={admin}
                                onChange={(e) => setAdmin(e.target.checked)}
                            />
                            <span>Admin</span>
                        </label>
                    </div>
                )}
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}
