import React from 'react'

function ThankYouPopUp({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0   bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#FFFFFF] rounded-lg p-[40px] w-full max-w-[522px] mx-auto space-y-[12px] text-center">
        <h3 className='text-[40px] '>❤️</h3>
        <h2 className="font-semibold text-[24px] leading-[24px] tracking-normal text-center">
Thank you for connect with us.        </h2>

<p className='font-normal text-[18px] leading-[18px] tracking-[-0.2px]  text-center'>Our team will contacting with you soon</p>
        <button
          onClick={onClose}
          className="bg-blue-600 w-full text-white px-6 py-2 rounded-[6px] hover:bg-blue-700"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default ThankYouPopUp