import React from 'react';
import BackWithIcon from '../../components/BackWithIcon';
import Tabs from '../../components/Tabs';
import FooterForm from '../../components/FooterForm';
import Activity from '../../components/Activity';
import Scan from '../../components/Scan';

const Home = () => {
    return (
        <div>
            <BackWithIcon />
            <div className="p-5 pb-[40px]">
                <Tabs />
            </div>
            {/* <article
                className="bg-[#2F2F2F] rounded-[50px] w-[418px] h-[286px] flex justify-between drop-shadow-2xl shadow-[#FFE3D8] "
                style={{ boxShadow: '3px -19px #FFE3D8' }}
            >
                <div className=" mt-[28px]">
                    <div className="flex flex-col ml-[30px]">
                        <span className="text-[13px] font-semibold text-[#FF8250] ">
                            Smart Watch
                        </span>
                        <span className="text-[26px] font-bold text-[#fff] ">
                            Fire Boltt
                        </span>
                    </div>

                    <div className="flex flex-col text-[#fff] mt-12 ml-[30px]">
                        <span>Scan the device </span>
                        <span>QR to connect</span>
                    </div>
                    <button className="font-bold text-[20px] cursor-pointer rounded-full py-[14.5px] px-[39.5px] gap-4 bg-[#FF6020] text-white mt-8 ml-[18px]">
                        Scan
                    </button>
                </div>
                <FaceBook className="mr-[18px] h-full" />
            </article> */}
            <Scan />
            <Activity />
            <FooterForm />
        </div>
    );
};

export default Home;
