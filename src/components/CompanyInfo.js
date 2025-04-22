import Image from "next/image";
import KmgLogo from "../assets/kmg-robost-logo.jpg"
import KmgBackground from "../assets/kmg_robust_trade_links_dmcc_cover.jpg"
const CompanyInfo = () => {
  return (
    <div className="bg-gray-100 py-2">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${KmgBackground.src})` }}
        >
        <div className="container mx-auto px-4">
          <Image className="rounded-md" height={100} width={100} src={KmgLogo} alt="kmg logo" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">KMG Robust</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-800">
            <b>24 M Revenue</b>
            <b>1-10 Employees</b>
            <b>15 Years Old</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;