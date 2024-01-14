'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useProfile } from '@/libs/hooks/useProfile';
import UserTabs from '@/components/UserTabs';
import { dbTimeForHuman } from '@/libs/datetime';

export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const { loading, data: profile } = useProfile();

    useEffect(() => {
        fetchOrders();
    }, []);

    function fetchOrders() {
        setLoadingOrders(true);
        fetch('/api/orders').then((res) => {
            res.json().then((orders) => {
                setOrders(orders.reverse());
                setLoadingOrders(false);
            });
        });
    }

    return (
        <section className='py-8 flex-auto'>
            <UserTabs isAdmin={profile.admin} />
            <h2 className='mb-6 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Orders
            </h2>
            <div className='max-w-3xl mx-auto border-t pt-6'>
                {loadingOrders && <div>Loading orders...</div>}
                {orders?.length > 0 &&
                    orders.map((order, index) => (
                        <div
                            key={index}
                            className='bg-gray-100 mb-2 p-4 rounded-lg flex flex-col md:flex-row items-center gap-6'>
                            <div className='grow flex flex-col md:flex-row items-center gap-6'>
                                <div>
                                    <div
                                        className={
                                            (order.paid
                                                ? 'bg-green-500'
                                                : 'bg-red-400') +
                                            ' p-2 rounded-md text-white w-24 text-center'
                                        }>
                                        {order.paid ? 'Paid' : 'Not paid'}
                                    </div>
                                </div>
                                <div className='grow'>
                                    <div className='flex gap-4 items-center mb-1'>
                                        <div className='grow'>
                                            {order.userEmail}
                                            <div className='text-gray-500 text-xs'>
                                                {order.cartProducts
                                                    .map((p) => p.name)
                                                    .join(', ')}
                                            </div>
                                        </div>
                                        <div className='text-gray-500 text-sm'>
                                            {dbTimeForHuman(order.createdAt)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='justify-end flex gap-2 items-center whitespace-nowrap'>
                                <Link
                                    href={'/orders/' + order._id}
                                    className='btn__outline '>
                                    Show
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
