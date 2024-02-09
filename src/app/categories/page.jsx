'use client';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaTrashCan } from 'react-icons/fa6';
import { FaPenToSquare } from 'react-icons/fa6';

import UserTabs from '@/components/UserTabs';
import { useProfile } from '@/libs/hooks/useProfile';
import DeleteButton from '@/components/DeleteButton';

export default function CategoriesPage() {
    const [categoryName, setCategoryName] = useState('');
    const [categories, setCategories] = useState([]);
    const [editedCategory, setEditedCategory] = useState(null);
    const { loading: profileLoading, data: profileData } = useProfile();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        fetch('/api/categories').then((res) => {
            res.json().then((categories) => {
                setCategories(categories);
            });
        });
    };

    async function handleCategorySubmit(e) {
        e.preventDefault();
        const creationPromise = new Promise(async (resolve, reject) => {
            const data = { name: categoryName };
            if (editedCategory) {
                data._id = editedCategory?._id;
            }
            const response = await fetch('/api/categories', {
                method: editedCategory ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            setCategoryName('');
            fetchCategories();
            setEditedCategory(null);
            if (response.ok) resolve();
            else reject();
        });

        await toast.promise(creationPromise, {
            loading: editedCategory
                ? 'Updating category...'
                : 'Creating your new category...',
            success: editedCategory ? 'Category updated' : 'Category created',
            error: 'Error, please, try again',
        });
    }

    async function handleDeleteClick(_id) {
        const promise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/categories?_id=' + _id, {
                method: 'DELETE',
            });
            if (response.ok) {
                resolve();
            } else {
                reject();
            }
        });

        await toast.promise(promise, {
            loading: 'Deleting...',
            success: 'Deleted',
            error: 'Error',
        });

        fetchCategories();
    }

    if (profileLoading) {
        return <div className='flex-auto'>Loading user info...</div>;
    }

    if (!profileData.admin) {
        return 'Not an admin';
    }

    return (
        <section className='py-8 flex-auto'>
            <UserTabs isAdmin={true} />
            <h2 className='mb-6 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Categories
            </h2>
            <div className='max-w-lg mx-auto border-t'>
                <form
                    className='mt-6'
                    onSubmit={handleCategorySubmit}>
                    <div className='flex gap-2 items-end'>
                        <div className='grow'>
                            <label>
                                {editedCategory
                                    ? 'Update category'
                                    : 'New category name'}
                                {editedCategory && (
                                    <>
                                        : <b>{editedCategory.name}</b>
                                    </>
                                )}
                            </label>
                            <input
                                type='text'
                                value={categoryName}
                                onChange={(ev) =>
                                    setCategoryName(ev.target.value)
                                }
                            />
                        </div>
                        <div className='pb-3 flex gap-2'>
                            <button
                                className='btn border border-primary'
                                type='submit'>
                                {editedCategory ? 'Update' : 'Create'}
                            </button>
                            <button
                                className='btn__outline'
                                type='button'
                                onClick={() => {
                                    setEditedCategory(null);
                                    setCategoryName('');
                                }}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
                <div>
                    <h3 className='mt-8 mb-2 text-lg text-dark/80 text-center'>
                        Existing categories
                    </h3>
                    <div className='flex flex-col gap-2'>
                        {categories?.length > 0 &&
                            categories?.map((c) => (
                                <div
                                    key={c._id}
                                    className='bg-gray-100 rounded-xl p-1.5 px-4 flex gap-2 mb-1 items-center'>
                                    <div className='grow'>{c.name}</div>
                                    <div className='flex gap-1'>
                                        <button
                                            className='p-2'
                                            type='button'
                                            onClick={() => {
                                                setEditedCategory(c);
                                                setCategoryName(c?.name);
                                            }}>
                                            <FaPenToSquare size={18} />
                                        </button>
                                        <DeleteButton
                                            label=<FaTrashCan />
                                            onDelete={() =>
                                                handleDeleteClick(c?._id)
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
