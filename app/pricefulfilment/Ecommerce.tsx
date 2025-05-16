


export default function Ecommerce() {
    return (
        <div className="2xl:py-[118px] xl:py-[98px] py-[30px] ">
      <div className="2xl:w-[1440px] xl:w-[1280px] w-full  mx-auto">
        <div className="2xl:w-[1128px] xl:w-[1150px] w-[375px] mx-auto">
          <div className="">
            <h2 className="2xl:text-[48px] xl:text-[42px] text-[20px] w-[202px] xl:w-[745px] 2xl:w-[851px] mx-auto font-bold uppercase 
            leading-[100%] 2xl:tracking-[1px] xl:tracking-[0.89px] text-center text-[#020C12]">
              E-COMMERCE FULFILLMENT/FBM
            </h2>
            <p className="text-center 2xl:text-[20px] xl:text-[18px] text-[14px] text-[#020C12]
            w-[259px] 2xl:w-full xl:w-full mx-auto font-normal leading-[25px] 2xl:leading-[28px] xl:leading-[24.89px]
            mt-[10px] 2xl:mt-[12px] xl:mt-[12px]">
              * No sign up fee, No monthly fee, No minimum, No contract
            </p>
          </div>
  
          {/* Fulfillment Table */}
          <div className="2xl:w-[1128px] xl:w-[1003px] 2xl:h-[384px] xl:h-[346px] w-[375px] h-[256px]
          2xl:mt-[30px] xl:mt-[31px] mt-[29px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto "
          style={{
            boxShadow: "0px 4px 6px #020C120F",
          }}>
            <table className="w-full  text-center border-none">
              <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px]  text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px]">
                  <th className=" ">Orders</th>
                  <th className="">First Unit</th>
                  <th className="">Extra Unit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1-199", "$3", "$1"],
                  ["200-2000 orders", "$2", "$0.5"],
                  ["2001-5000 orders", "$1.9", "$0.4"],
                  ["5001-10000 orders", "$1.8", "$0.4"],
                  ["10000+ orders", "$1.5", "$0.3"],
                ].map(([orders, first, extra], i, arr) => (
                  <tr
                    key={orders}
                    className={`${
                      i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                    } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                  >
                    <td >{orders}</td>
                    <td >{first}</td>
                    <td >{extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Returns */}
          <div className="bg-[#27C9FF] 2xl:h-[74px] xl:h-[66px] 2xl:w-[1128px] xl:w-[1003px] w-[375px] h-[50px]
          mx-auto text-white  font-semibold 2xl:rounded-[10px] xl:rounded-[10px] mt-[10px] 2xl:mt-[20px] xl:mt-[18px]  flex justify-between">
            <h1 className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#FFFFFF] 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px] font-semibold 
            2xl:py-[23px] xl:py-[20px] py-[14px] 2xl:pl-[230px] xl:pl-[220px] pl-[65px]">Returns</h1>
            <h1 className="2xl:text-[18px] xl:text-[16px] text-[14px] text-[#FFFFFF] 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px] font-semibold 
            2xl:py-[23px] xl:py-[20px] py-[14px] 2xl:pr-[130px] xl:pr-[110px] pr-[40px]">3$</h1>
          </div>
  
          {/* Storage Table */}
        
          <div className="2xl:w-[1128px] xl:w-[1003px] 2xl:h-[384px] xl:h-[286px] w-[375px] h-[216px]
          2xl:mt-[30px] xl:mt-[60px] mt-[30px] overflow-hidden 2xl:rounded-[10px] xl:rounded-[8.89px] mx-auto  "
          style={{
            boxShadow: "0px 4px 6px #020C120F",
          }}>
            <table className="w-full  text-center border-none">
              <thead className="bg-[#0084FF] 2xl:h-[74px] xl:h-[65px] h-[56px] text-white 2xl:rounded-t-[10px] xl:rounded-t-[8.89px]">
                <tr className="2xl:text-[20px] xl:text-[17.78px] text-[14px] font-semibold 2xl:leading-[28px] xl:leading-[28px] leading-[24.89px]">
                  <th className="">Storage</th>
                  <th className="">First Week</th>
                  <th className="">Per Week</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bin", "$0", "$2"],
                  ["Rack", "$0", "$6"],
                  ["Pallet 40x48x72", "$0", "$10"],
                  ["30+ Pallet", "$0", "$8"],
                ].map(([type, first, per], i, arr) => (
                  <tr
                    key={type}
                    className={`${
                      i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#D6D6D633]"
                    } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} 2xl:h-[62px] xl:h-[55.11px] h-[40px] text-[#020C12]
                     2xl:text-[18px] text-[12px] xl:text-[18px]
                     font-semibold leading-[28px]`}
                  >
                    <td className="px-4 py-2">{type}</td>
                    <td className="px-4 py-2">{first}</td>
                    <td className="px-4 py-2">{per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    );
  }
  