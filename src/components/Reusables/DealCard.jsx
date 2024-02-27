import React from 'react'

const DealCard = () => {
  const imgSrc = 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__'

  return (
    <div className='sm:w-[32%] w-[90%] h-[425px] flex flex-col items-center justify-between p-4 bg-white rounded-2xl'>
      <img src={imgSrc} alt="img" className='w-[140px] my-4' />
      <div className='flex w-full gap-2 text-center sm:justify-start justify-center'>
        <div className='text-[#074786] bg-[#F2F4F7] rounded-lg text-[13px] p-1'>20% Off</div>
        <div className='text-[#074786] bg-[#F2F4F7] rounded-lg text-[13px] p-1'>Limited time</div>
      </div>
      <p className='text-[#626E79] font-bold text-[16px]'>Webbuilder 1</p>
      <p className='text-[#626E79] text-[16px]'>Computer  Modern clasic with wix support</p>
      <p className='w-full flex gap-3 items-end sm:justify-start justify-center'>
        <span className='text-[#5C6874] text-[20px]'>$39.96</span>
        <span className='text-[#9FA9B3] text-[14px]'> $49.96</span>
        <span className='text-[#EF4C5D] text-[13px]'>(20% Off)</span>
      </p>
      <button className='bg-[#1B88F4] h-[48px] w-full text-white text-[16px] rounded-2xl'>View Deal</button>
    </div>
  )
}

export default DealCard