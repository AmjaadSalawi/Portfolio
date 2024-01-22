"use client";

function Footer() {
  return (
    <div className="static bottom-0 left-0">
      <div className="flex flex-col xl:flex-row justify-between items-center pb-28 pt-5 xl:pb-5 xl:py-5 px-10 gap-y-3 bg-white/10 text-center">
        <p>Copyright © 2024 All Rights Reserved</p>
        <p className="text-sm xl:text-base">
          Made with love <span className="text-red-500">❤</span> by Amjaad Salawi
        </p>
      </div>
    </div>
  );
}

export default Footer;
