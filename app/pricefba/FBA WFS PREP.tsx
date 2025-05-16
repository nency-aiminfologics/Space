


export default function FbaWfsPrep() {
    return (
        <div className="2xl:py-[118px] xl:py-[98px] py-[30px]">
            <div className="2xl:w-[1440px] xl:w-[1280px] w-full  mx-auto">
                <div className="2xl:w-[1128px] xl:w-[1150px] w-[375px] mx-auto">
                    <div className="">
                        <h2 className="2xl:text-[48px] xl:text-[42px] text-[20px] font-bold uppercase leading-[100%] 
            2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[1%] text-center text-[#020C12]">
                            FBA/WFS PREP
                        </h2>
                        <p className="text-center 2xl:text-[20px] xl:text-[18px] text-[14px] text-[#020C12] font-normal 
            2xl:leading-[28px] xl:leading-[24.89px] leading-[25px]
             w-[259px] 2xl:w-full xl:w-full mx-auto 2xl:mt-[12px] xl:mt-[12px] mt-[10px]">
                            *Up to 4 lbs in weight and up to 12 inches in length, width and height
                        </p>
                    </div>

                    {/* FBA/WFS PREP TABLE */}
                    <div className="2xl:w-[1128px] xl:w-[1003px] w-[375px] h-[456px] 2xl:h-[694px] xl:h-[616px] 
          2xl:mt-[30px] xl:mt-[31px] mt-[30px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto"
                        style={{
                            boxShadow: "0px 4px 6px #020C120F",
                        }}>
                        <table className="w-full  text-center border-none">
                            <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px] text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                                <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold leading-[28px]">
                                    <th className=" ">Units per Month / Service Type</th>
                                    <th className="">Pricing Details</th>

                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["1-50 untis/month", "$100/month",],
                                    ["50-299 units/month", "$1.2",],
                                    ["300-1000 units/month", "$0.7",],
                                    ["1001-2000 units/month", "$0.6",],
                                    ["2001-5000 units/month`", "$0.5",],
                                    ["5000+ units/month", "$0.4",],
                                    ["OA/RA", "Extra $0.3/unit",],
                                    ["Extra label", "$0.2/label",],
                                    ["Photos", "$2/photo",],
                                    ["Overweight or oversize", "x2",],
                                ].map(([unit, price], i, arr) => (
                                    <tr
                                        key={unit}
                                        className={`${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                                            } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                                    >
                                        <td >{unit}</td>
                                        <td >{price}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>



                    {/* RECEIVING TABLE */}


                    <div className="2xl:w-[1128px] 2xl:h-[480px] xl:w-[1003px] xl:h-[430px] w-[375px] h-[301px] m
                    mx-auto  2xl:mt-[70px] xl:mt-[70px] mt-[35px]">

                        <h1 className="2xl:text-[48px] xl:text-[42px] text-[20px] font-bold uppercase leading-[100%] 
            2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[1%] text-center text-[#020C12]">RECEIVING</h1>

                        <div className=" 2xl:w-[1128px] xl:w-[1003px] 2xl:h-[480px] xl:h-[350px]  w-[375px] h-[256px]
          2xl:mt-[30px] xl:mt-[30px] mt-[20px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px] text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                                    <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold leading-[28px]">
                                        <th className=" ">Units per Month / Service Type</th>
                                        <th className="">Pricing Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Up to 10 boxes", "free",],
                                        ["more then 10 boxes", "$1/box",],
                                        ["pallet", "$10/pallet",],
                                        ["Container 20′", "$300",],
                                        ["Container 40′", "$600",],
                                    ].map(([unit, price], i, arr) => (
                                        <tr
                                            key={unit}
                                            className={`${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                                        >
                                            <td >{unit}</td>
                                            <td >{price}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* BOX FORWARDING table */}

                    <div className="2xl:w-[1128px] 2xl:h-[412px] xl:w-[1003px] xl:h-[365px] w-[375px] h-[261px] 
                    mx-auto  2xl:mt-[70px] xl:mt-[70px] mt-[35px] ">

                        <h1 className="2xl:text-[48px] xl:text-[42px] text-[20px] font-bold uppercase leading-[100%] 
            2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[1%] text-center text-[#020C12]">BOX FORWARDING</h1>

                        <div className=" 2xl:w-[1128px] xl:w-[1003px] 2xl:h-[480px] xl:h-[350px]  w-[375px] h-[216px]
          2xl:mt-[30px] xl:mt-[30px] mt-[20px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px] text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                                    <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold leading-[28px]">
                                        <th className=" ">Units per Month / Service Type</th>
                                        <th className="">Pricing Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["1-9 boxes", "$50/batch",],
                                        ["10-50 boxes", "$5/box",],
                                        ["50+ boxes", "$4/box",],
                                        ["Palletizing′", "$20+$0.3/box",],

                                    ].map(([unit, price], i, arr) => (
                                        <tr
                                            key={unit}
                                            className={`${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                                        >
                                            <td >{unit}</td>
                                            <td >{price}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    {/* SETS TABLE  */}

                    <div className="2xl:w-[1128px] 2xl:h-[480px] xl:w-[1003px] xl:h-[430px] w-[375px] h-[261px] 
                    mx-auto  2xl:mt-[70px] xl:mt-[70px] mt-[35px] ">
                        <h1 className="2xl:text-[48px] xl:text-[42px] text-[20px] font-bold uppercase leading-[100%] 
            2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[1%] text-center text-[#020C12]">SETS</h1>
                        <div className=" 2xl:w-[1128px] xl:w-[1003px] 2xl:h-[480px] xl:h-[350px]  w-[375px] h-[216px]
          2xl:mt-[30px] xl:mt-[30px] mt-[20px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                               <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px] text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                                    <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold leading-[28px]">
                                        <th className=" ">Units per Month / Service Type</th>
                                        <th className="">Pricing Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["2 units", "$1.2",],
                                        ["3-5 units", "$1.5",],
                                        ["6-10 units", "$1.8",],
                                        ["10+", "by request",],

                                    ].map(([unit, price], i, arr) => (
                                        <tr
                                            key={unit}
                                            className={`${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                                        >
                                            <td >{unit}</td>
                                            <td >{price}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* BUYBACK FROM US SUPPLIERS table */}



                    <div className="2xl:w-[1128px] 2xl:h-[480px] xl:w-[1003px] xl:h-[430px] w-[375px] h-[221px] 
                    mx-auto  2xl:mt-[70px] xl:mt-[70px] mt-[35px] ">
                        <h1 className="2xl:text-[48px] xl:text-[42px] text-[20px] font-bold uppercase leading-[100%] 
            2xl:tracking-[1px] xl:tracking-[0.89px] tracking-[1%] text-center text-[#020C12]">BUYBACK FROM US SUPPLIERS</h1>
                        <div className=" 2xl:w-[1128px] xl:w-[1003px] 2xl:h-[480px] xl:h-[350px]  w-[375px] h-[176px]
          2xl:mt-[30px] xl:mt-[30px] mt-[20px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                 <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px] text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                                    <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold leading-[28px]">
                                        <th className=" ">Units per Month / Service Type</th>
                                        <th className="">Pricing Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["0-500", "5%",],
                                        ["501-1000", "4%",],
                                        ["6-10 units", "3%",],


                                    ].map(([unit, price], i, arr) => (
                                        <tr
                                            key={unit}
                                            className={`${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                                        >
                                            <td >{unit}</td>
                                            <td >{price}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="bg-[#27C9FF] 2xl:h-[74px] xl:h-[66px] 2xl:w-[1128px] xl:w-[1003px] w-[375px] h-[50px] mx-auto text-white  font-semibold 
                    2xl:rounded-[10px] xl:rounded-[10px] 2xl:mt-[20px] xl:mt-[18px] mt-[18px] flex justify-between">

                        <h1 className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#FFFFFF] 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px] 
                        font-semibold 2xl:py-[23px] xl:py-[20px] py-[14px] 2xl:pl-[230px] xl:pl-[220px] pl-[20px]">Removals</h1>

                        <h1 className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#FFFFFF] 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px]
                        font-semibold 2xl:py-[23px] xl:py-[20px] py-[14px] 2xl:pr-[130px] xl:pr-[110px] pr-[20px]">FBA price x2</h1>
                    </div>

                    <div className="bg-[#27C9FF] 2xl:h-[74px] xl:h-[66px] 2xl:w-[1128px] xl:w-[1003px]  w-[375px] h-[70px] mx-auto text-white  
                    font-semibold 2xl:rounded-[10px] xl:rounded-[10px] 2xl:mt-[20px] xl:mt-[18px] mt-[8px]  flex justify-between">

                        <h1 className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#FFFFFF] 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px]
                         font-semibold 2xl:py-[23px] xl:py-[20px] py-[14px] 2xl:pl-[230px] pl-[20px] xl:pl-[220px] w-[179px] 2xl:w-full xl:w-full">Custom work *0.5 hour minimum</h1>

                        <h1 className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#FFFFFF] 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px]
                         font-semibold 2xl:py-[23px] xl:py-[20px] py-[14px] 2xl:pr-[130px] xl:pr-[110px] pr-[40px]">$40/hour</h1>
                    </div>



                </div>
            </div>
        </div>
    );
}
