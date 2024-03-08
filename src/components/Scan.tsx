import React from 'react';
// import Watch from '../svg/Watch';
import Watch from '../assets/watch.svg';
const Scan = () => {
    return (
        <div className="w-full text-center flex flex-col relative">
            <div className="mx-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="368"
                    height="255"
                    viewBox="0 0 368 255"
                    fill="none"
                >
                    <rect width="368" height="255" rx="30" fill="#FFE3D8" />
                </svg>
            </div>
            <div className="mx-auto absolute top-4 flex justify-center w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="398"
                    height="229"
                    viewBox="0 0 398 229"
                    fill="none"
                >
                    <rect width="398" height="229" rx="35" fill="#FFBFA6" />
                </svg>
            </div>
            <div className="mx-auto absolute top-8 flex justify-center w-full">
                <div className="relative z-[1]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="418"
                        height="286"
                        viewBox="0 0 418 286"
                        fill="none"
                    >
                        <rect width="418" height="286" rx="40" fill="#2F2F2F" />
                    </svg>
                    <div className="px-5 flex flex-col mx-auto absolute top-8 h-[80%] text-left">
                        <div className="flex flex-col flex-grow">
                            <p className="text-[#FF8250] font-semibold text-[13px]">
                                Smart Watch
                            </p>
                            <p className="font-bold text-[26px] text-white">
                                Fire Boltt
                            </p>
                        </div>
                        <div className="flex flex-col text-white flex-grow-[2]">
                            <p>Scan the device</p>
                            <p>QR to connect</p>
                        </div>
                        <button className="bg-[#FF6020] text-white w-[127px] h-[49px] flex justify-center items-center rounded-full">
                            Scan
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto absolute top-4 flex justify-end w-full z-[2]">
                {/* <Watch /> */}
                <img src={Watch} />
            </div>
            <div className="mx-auto absolute top-56 justify-center w-full z-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="428"
                    height="175"
                    viewBox="0 0 428 175"
                    fill="none"
                >
                    <g filter="url(#filter0_f_47_251)">
                        <ellipse
                            cx="214"
                            cy="87.5"
                            rx="185"
                            ry="37.5"
                            fill="#2F2F2F"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_47_251"
                            x="-21"
                            y="0"
                            width="470"
                            height="175"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="25"
                                result="effect1_foregroundBlur_47_251"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="mt-20"></div>
        </div>
    );
};

export default Scan;
