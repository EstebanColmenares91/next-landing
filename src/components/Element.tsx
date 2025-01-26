import { Product } from '@/app/types';
import React, { useState } from 'react';
import Spinner from './Spinner';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import { Button } from './ui/button';


const ProductComponent = ({ product }: { product: Product }) => {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(() => true)
    }

    return (
        <article className='rounded-md shadow-md p-4 dark:shadow-gray-700'>
            <div className="flex gap-4 justify-between">
                <div className="flex gap-4">
                    <Image
                        className="w-12 h-12"
                        src={`/${product.img}`}
                        alt={product.title}
                        height={64}
                        width={64}
                    />
                    <div>
                        <p className="font-bold text-lg">{product.title}</p>
                        <p>By Zeno</p>
                    </div>
                </div>
                <Button
                    className="flex gap-1 bg-sky-700 h-fit self-center justify-center font-bold text-white rounded-md"
                    onClick={handleClick}
                >
                    {
                        isClicked ? <>
                            <Spinner color='border-white'/>
                            <span>Installing</span>
                        </> : <span>Download</span>
                    }
                </Button>
            </div>

            {
                isClicked ?
                    <div className='grid gap-2'>
                        <p>Signing: <strong>{product.apk}</strong></p>
                        <ProgressBar />
                    </div>
                    : null
            }
        </article>
    );
};

export default ProductComponent;

