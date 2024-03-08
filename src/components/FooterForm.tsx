import React from 'react';
import Arrow from '../svg/Arrow';

const FooterForm = () => {
    const save = () => {
        console.log('Btn Clicked');
    };
    return (
        <div className="bg-[#FF6020] rounded-t-[50px] pt-[10px] pb-10">
            <div className="p-5">
                <span className="text-white font-semibold text-5">
                    Add Details
                </span>
                <div className="pt-5">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-5 h-[50px] font-extrabold text-[14px] rounded-full w-full"
                    />
                </div>
                <div className="pt-5 flex gap-2">
                    <input
                        type="text"
                        placeholder="Age"
                        className="p-5 h-[50px] font-extrabold text-[14px] rounded-full w-full"
                    />
                    <input
                        type="text"
                        placeholder="Height"
                        className="p-5 h-[50px] font-extrabold text-[14px] rounded-full w-full"
                    />
                </div>
                <div className="pt-5">
                    <button className="p-5 h-[50px] rounded-full w-full bg-white items-center flex justify-between">
                        <p className="text-[14px] font-extrabold">
                            Are you a gym member?
                        </p>
                        <div className="-rotate-0">
                            <Arrow />
                        </div>
                    </button>
                </div>

                <div className="pt-5">
                    <button className="p-5 h-[50px] rounded-full w-full bg-white items-center flex justify-between">
                        <p className="text-[14px] font-extrabold">
                            Do you eat meat?
                        </p>
                        <div className="-rotate-0">
                            <Arrow />
                        </div>
                    </button>
                </div>
                <div className="pt-5">
                    <button className="p-5 h-[50px] rounded-full w-full bg-white items-center flex justify-between">
                        <p className="text-[14px] font-extrabold">
                            Are you a cyclist?
                        </p>
                        <div className="-rotate-0">
                            <Arrow />
                        </div>
                    </button>
                </div>
                <div className="pt-5">
                    <button
                        className="flex items-center justify-center p-5 h-[60px] rounded-full w-full bg-[#2F2F2F] text-white font-bold"
                        onClick={save}
                    >
                        Save Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FooterForm;
