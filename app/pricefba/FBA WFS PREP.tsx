


export default function FbaWfsPrep() {
    return (
        <div className="pt-[63px] h-[3097px] ">
            <div className="w-[1440px]     mx-auto">
                <div className="w-[1128px] mx-auto">
                    <div className="mt-[55px]">
                        <h2 className="text-[48px] font-bold uppercase leading-[100%] tracking-[1px] text-center text-[#020C12]">
                            FBA/WFS PREP
                        </h2>
                        <p className="text-center text-[20px] text-[#020C12] font-normal leading-[28px] mt-[12px]">
                            *Up to 4 lbs in weight and up to 12 inches in length, width and height
                        </p>
                    </div>

                    {/* FBA/WFS PREP TABLE */}
                    <div className="w-[1128px] h-[694px] mt-[30px] overflow-hidden rounded-[10px] "
                        style={{
                            boxShadow: "0px 4px 6px #020C120F",
                        }}>
                        <table className="w-full  text-center border-none">
                            <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                                <tr className="text-[20px] font-semibold leading-[28px]">
                                    <th className="px-4 py-2 ">Units per Month / Service Type</th>
                                    <th className="px-4 py-2">Pricing Details</th>

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
                                            } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px] text-[#020C12] text-[18px] font-semibold leading-[28px]`}
                                    >
                                        <td >{unit}</td>
                                        <td >{price}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>



                    {/* RECEIVING TABLE */}


                    <div className="w-[1128px] h-[480px] mt-[70px]">
                        <h1 className="text-[#020C12] text-[48px] font-bold uppercase leading-[100%] tracking-[1px] text-center">RECEIVING</h1>
                        <div className=" overflow-hidden rounded-[10px] mt-[30px]"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                                    <tr className="text-[20px] font-semibold leading-[28px]">
                                        <th className="px-4 py-2 ">Units per Month / Service Type</th>
                                        <th className="px-4 py-2">Pricing Details</th>

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
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px] text-[#020C12] text-[18px] font-semibold leading-[28px]`}
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

                    <div className="w-[1128px] h-[412px] mt-[70px]">
                        <h1 className="text-[#020C12] text-[48px] font-bold uppercase leading-[100%] tracking-[1px] text-center">BOX FORWARDING</h1>
                        <div className=" overflow-hidden rounded-[10px] mt-[30px]"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                                    <tr className="text-[20px] font-semibold leading-[28px]">
                                        <th className="px-4 py-2 ">Units per Month / Service Type</th>
                                        <th className="px-4 py-2">Pricing Details</th>

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
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px] text-[#020C12] text-[18px] font-semibold leading-[28px]`}
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

                    <div className="w-[1128px] h-[412px] mt-[70px]">
                        <h1 className="text-[#020C12] text-[48px] font-bold uppercase leading-[100%] tracking-[1px] text-center">SETS</h1>
                        <div className=" overflow-hidden rounded-[10px] mt-[30px]"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                                    <tr className="text-[20px] font-semibold leading-[28px]">
                                        <th className="px-4 py-2 ">Units per Month / Service Type</th>
                                        <th className="px-4 py-2">Pricing Details</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["2 units", "$1.2",],
                                        ["3-5 units", "$1.5",],
                                        ["6-10 units", "$1.8",],
                                        ["10+′", "by request",],

                                    ].map(([unit, price], i, arr) => (
                                        <tr
                                            key={unit}
                                            className={`${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px] text-[#020C12] text-[18px] font-semibold leading-[28px]`}
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



                    <div className="w-[1128px] h-[356px] mt-[70px]">
                        <h1 className="text-[#020C12] text-[48px] font-bold uppercase leading-[100%] tracking-[1px] text-center">BUYBACK FROM US SUPPLIERS</h1>
                        <div className=" overflow-hidden rounded-[10px] mt-[30px]"
                            style={{
                                boxShadow: "0px 4px 6px #020C120F",
                            }}>
                            <table className="w-full  text-center border-none">
                                <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                                    <tr className="text-[20px] font-semibold leading-[28px]">
                                        <th className="px-4 py-2 ">Units per Month / Service Type</th>
                                        <th className="px-4 py-2">Pricing Details</th>

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
                                                } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px]  text-[#020C12] text-[18px] font-semibold leading-[28px]`}
                                        >
                                            <td >{unit}</td>
                                            <td >{price}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className="bg-[#27C9FF] h-[74px] w-[1128px] text-white  font-semibold rounded-[10px] mt-[30px]   py-[23px] flex justify-between px-[100px] ">
                        <h1 className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold text-center">Removals</h1>
                        <h1 className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold">FBA price x2</h1>
                    </div>

                    <div className="bg-[#27C9FF] h-[74px] w-[1128px] text-white  font-semibold rounded-[10px] mt-[12px]   py-[23px] flex justify-between px-[100px] ">
                        <h1 className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold text-center">Custom work *0.5 hour minimum</h1>
                        <h1 className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold">$40/hour</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}
