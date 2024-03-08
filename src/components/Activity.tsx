import React from 'react';

const Activity = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="bg-[#2F2F2F] w-[178px] h-[178px] rounded-[50px] flex justify-center items-center">
                    <div className="flex gap-2">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="130"
                                height="130"
                                viewBox="0 0 130 130"
                                fill="none"
                            >
                                <path
                                    d="M130 65C130 100.899 100.899 130 65 130C29.1015 130 0 100.899 0 65C0 29.1015 29.1015 0 65 0C100.899 0 130 29.1015 130 65ZM12.9101 65C12.9101 93.7685 36.2315 117.09 65 117.09C93.7685 117.09 117.09 93.7685 117.09 65C117.09 36.2315 93.7685 12.9101 65 12.9101C36.2315 12.9101 12.9101 36.2315 12.9101 65Z"
                                    fill="white"
                                    fill-opacity="0.05"
                                />
                            </svg>
                            <div className="absolute top-[-20px] left-[2.75rem]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="105"
                                    height="149"
                                    viewBox="0 0 105 149"
                                    fill="none"
                                >
                                    <g filter="url(#filter0_d_47_245)">
                                        <path
                                            d="M61.3975 126.398C63.9184 128.918 68.0341 128.937 70.2926 126.178C77.0277 117.953 81.6642 108.172 83.751 97.6809C86.2591 85.0721 84.9719 72.0028 80.0522 60.1256C75.1325 48.2484 66.8013 38.0968 56.1121 30.9545C47.2179 25.0116 37.0236 21.3743 26.4447 20.3202C22.8972 19.9668 20 22.89 20 26.455C20 30.0201 22.901 32.8689 26.4387 33.3095C34.4599 34.3087 42.1697 37.1653 48.9396 41.6888C57.5057 47.4125 64.1822 55.5479 68.1248 65.0661C72.0674 74.5842 73.0989 85.0578 71.089 95.1622C69.5006 103.148 66.0688 110.62 61.1035 116.998C58.9136 119.811 58.8767 123.877 61.3975 126.398Z"
                                            fill="#FF6020"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_47_245"
                                            x="0"
                                            y="0.291199"
                                            width="105"
                                            height="147.977"
                                            filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB"
                                        >
                                            <feFlood
                                                flood-opacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="10" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="out"
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 1 0 0 0 0 0.511093 0 0 0 0 0.313334 0 0 0 0.51 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_47_245"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_47_245"
                                                result="shape"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <div className="flex flex-col items-center">
                                    <p className="font-bold text-[20px] text-white">
                                        5,233
                                    </p>
                                    <p className="text-[#FF8250] font-semibold text-[10px]">
                                        Steps
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <div className="bg-[#FFF4EF] rounded-full w-[193px] h-[81px] flex flex-col justify-center">
                        <p className="text-[#FF8250] font-semibold text-[13px]">
                            Calories
                        </p>
                        <p className="text-[#2F2F2F] font-bold text-[20px]">
                            1200 Kcal
                        </p>
                    </div>
                    <div className="bg-[#FFF4EF] rounded-full w-[193px] h-[81px] flex flex-col justify-center">
                        <p className="text-[#FF8250] font-semibold text-[13px]">
                            Water
                        </p>
                        <p className="text-[#2F2F2F] font-bold text-[20px]">
                            1.8 Ltrs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
