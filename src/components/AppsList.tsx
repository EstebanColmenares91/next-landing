'use client'

import { Product } from '@/app/types';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import ProductComponent from './Element';

const object: Record<string, string> = {
    'Apps': 'Apps',
    'games': 'Games',
    'emulat': 'Emulators',
    'tweaks': 'Tweaks',
    'util': 'Utilities'
}

const categories = [
    {
        "name": "Apps",
        "value": "Apps"
    },
    {
        "name": "Games",
        "value": "games"
    },
    {
        "name": "Emulators",
        "value": "emulat"
    },
    {
        "name": "Tweaks",
        "value": "tweaks"
    },
    {
        "name": "Utilities",
        "value": "util"
    }
]

export default function AppsList({ initialProducts }: { initialProducts: Product[] }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Apps')


    const filteredProducts = initialProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'Apps' || product.category === selectedCategory)
    )

    return (
        <div>
            <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
            />

            <h2 className='text-lg'>Categoria: <strong>{object[selectedCategory]}</strong></h2>

            <ul className="space-y-2 mb-20">
                <li>
                    {
                        filteredProducts.length === 0 ? (
                            <p className='mt-4 text-xl text-red-800 dark:text-red-300'>No hay aplicaciones asociadas a su busqueda ni categoria. Porfavor pruebe con otro titulo y/o categoria.</p>
                        ) : filteredProducts.map(product => <ProductComponent product={product} key={product.title} />)
                    }
                </li>
            </ul>
            
            <nav className="fixed bottom-0 left-0 right-0 bg-background border-t flex justify-between p-2">
                {categories.map((category) => (
                    <Button
                        key={category.name}
                        variant={selectedCategory === category.value ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.value)}
                    >
                        {category.name}
                    </Button>
                ))}
            </nav>
        </div>
    )
}

