import React from 'react';
import Logo from '../svg/Logo';
import Arrow from '../svg/Arrow';

const BackWithIcon = () => {
    return (
        <>
            <div className="px-5 py-10">
                <div className="flex justify-between">
                    <div className="w-[60px] h-[60px] bg-[#f2f2f2] rounded-full items-center flex justify-center rotate-90">
                        <Arrow />
                    </div>
                    <div className="w-[60px] h-[60px] bg-[#f2f2f2] rounded-full items-center flex justify-center">
                        <Logo />
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-[30px] text-[#2F2F2F] text-[36px] font-bold">
                <span>Your</span>
                <span>Fitness Tracker</span>
            </div>
        </>
    );
};

export default BackWithIcon;
