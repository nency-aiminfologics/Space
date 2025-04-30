


export default function Ecommerce() {
    return (
        <div className="pt-[63px]">
      <div className="w-[1440px] h-[1146px]  mx-auto">
        <div className="w-[1128px] mx-auto">
          <div className="mt-[55px]">
            <h2 className="text-[48px] font-bold uppercase leading-[100%] tracking-[1px] text-center text-[#020C12]">
              E-COMMERCE FULFILLMENT/FBM
            </h2>
            <p className="text-center text-[20px] text-[#020C12] font-normal leading-[28px] mt-[12px]">
              * No sign up fee, No monthly fee, No minimum, No contract
            </p>
          </div>
  
          {/* Fulfillment Table */}
          <div className="w-[1128px] h-[384px] mt-[30px] overflow-hidden rounded-[10px] "
          style={{
            boxShadow: "0px 4px 6px #020C120F",
          }}>
            <table className="w-full  text-center border-none">
              <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                <tr className="text-[20px] font-semibold leading-[28px]">
                  <th className="px-4 py-2 ">Orders</th>
                  <th className="px-4 py-2">First Unit</th>
                  <th className="px-4 py-2">Extra Unit</th>
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
                    } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px] text-[#020C12] text-[18px] font-semibold leading-[28px]`}
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
          <div className="bg-[#27C9FF] h-[74px] w-[1128px] text-white  font-semibold rounded-[10px] mt-[20px] px-[160px]  py-[23px] flex justify-between">
            <h1 className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold">Returns</h1>
            <h1 className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold">3$</h1>
          </div>
  
          {/* Storage Table */}
        
          <div className="w-[1128px] h-[384px] mt-[70px] overflow-hidden rounded-[10px] "
          style={{
            boxShadow: "0px 4px 6px #020C120F",
          }}>
            <table className="w-full  text-center border-none">
              <thead className="bg-[#0084FF] h-[74px] text-white rounded-t-[10px]">
                <tr className="text-[20px] font-semibold leading-[28px]">
                  <th className="px-4 py-2">Storage</th>
                  <th className="px-4 py-2">First Week</th>
                  <th className="px-4 py-2">Per Week</th>
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
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } ${i === arr.length - 1 ? "rounded-b-[10px]" : ""} h-[62px] text-[#020C12] text-[18px] font-semibold leading-[28px]`}
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
  