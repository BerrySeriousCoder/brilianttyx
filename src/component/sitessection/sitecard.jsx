import React from 'react';
import { motion } from 'framer-motion';

export default function({ sitedata }) {
    return (
        <div className='flex overflow-x-scroll scrollbar-hide space-x-8 py-8' style={{ width: '100%' }}>
            {sitedata.map((site, index) => (
                <motion.div 
                    key={index} 
                    className='flex gap-10' 
                    style={{ minWidth: '100%' }}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'tween', duration: 0.5 }}
                >
                    <div className='flex justify-center items-center'>
                        <img className='h-[40rem] w-[200rem] object-cover rounded-md' src={site.image} alt={`Site ${index}`} />
                    </div>
                    
                    <div className='font-[Roboto] text-2xl '>
                        {/* Pass cardData to Datagrid */}
                        <Datagrid data={site.cardData}></Datagrid>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

const Datagrid = ({data}) => {
    return <div className='flex gap-8 flex-col'>
            {data.map((data , index) =>(
                <div key={index}>
                    <div className='text-white mb-2'>{data.title}</div>
                    <div className='text-white text-lg'>{data.discription}</div>
                </div>
            ))}
         </div>
}
