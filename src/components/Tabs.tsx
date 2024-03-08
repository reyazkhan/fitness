import React, { useState } from 'react';
const tabArray: Array<{ name: string }> = [
    {
        name: 'Connected Devices',
    },
    {
        name: 'Statistics',
    },
];

const Tabs = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
        <div className="flex gap-2.5 no-scrollbar whitespace-nowrap overflow-x: auto">
            {tabArray?.map((res, index) => {
                return (
                    <div
                        key={index}
                        className={`font-bold text-[20px] cursor-pointer rounded-full py-5 px-[30px] gap-2 ${selectedTabIndex === index ? 'bg-[#FF6020] text-white' : 'bg-[#f2f2f2] text-[#757575]'}`}
                        onClick={() => setSelectedTabIndex(index)}
                    >
                        {res.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Tabs;
