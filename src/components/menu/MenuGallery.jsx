'use client';
import { useEffect, useState } from 'react';
import SectionHeaders from '../layout/SectionHeaders';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
// import MenuItemTile from './MenuItemTile';
import { fadeIn } from '@/libs/variants';

export default function MenuGallery() {
    const [categories, setCategories] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch('/api/categories').then((res) => {
            res.json().then((categories) => setCategories(categories));
        });
        fetch('/api/menu-items').then((res) => {
            res.json().then((menuItems) => setMenuItems(menuItems));
        });
    }, []);
    return (
        <section className='mt-8'>
            {categories?.length > 0 &&
                categories.map((c) => (
                    <div key={c._id}>
                        <div className='text-center'>
                            <SectionHeaders mainHeader={c.name} />
                        </div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 mb-16'>
                            {menuItems
                                .filter((item) => item.category === c._id)
                                .map((item) => (
                                    <motion.div
                                        key={item._id}
                                        variants={fadeIn('up', 0.2)}
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{ once: true, amount: 0.2 }}>
                                        <MenuItem {...item} />
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                ))}
        </section>
    );
}
