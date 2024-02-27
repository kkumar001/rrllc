import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import {faStar as star, faGem } from '@fortawesome/free-regular-svg-icons'

const Card = ({ bestChoice, bestValue, srNo, imgTitle, heading, description, highlight, rating, ratingComment }) => {
  const imgSource = 'https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__';

  return (
    <div className='w-full relative z-10 flex sm:flex-row flex-col justify-between gap-4 bg-white rounded-lg p-2 text-[16px] text-[#4B5665]'>
      {bestChoice ||  bestValue ?
        <div className='z-20 flex items-center gap-1 px-1 w-[136px] h-[34px] bg-[#FF7724] absolute -top-[17px] -left-1 rounded-r-2xl text-white'>
          <FontAwesomeIcon icon={bestChoice ? faTrophy : faGem} className='size-[20px]' />
          <p className='text-[16px]'>Best {bestChoice ? 'Choice' : 'Value'}</p>
        </div> :
        ''
      }
      <div className='z-20 absolute top-8 -left-6 size-[44px] rounded-full border-[1px] border-[#E1E4E6] text-[20px] flex justify-center items-center'>
        <p>{srNo}</p>
      </div>
      <div className='h-full sm:w-[20%] w-[90%] flex flex-col gap-4 items-center justify-center'>
        <img src={imgSource} className='w-[140px] sm:mt-0 mt-4' alt="img" />
        <p className='text-[#626E79] text-[13px]'>{imgTitle}</p>
      </div>
      <div className='h-full sm:w-[50%] w-[90%] flex flex-col gap-6 justify-between'>
        <p><span className='font-[700]'>{heading}</span>- {description}</p>
        <p><span className='font-[700]'>Main Highlight</span> <br />
          {highlight}
        </p>
        <Link className='text-[#1B88F4] flex items-center gap-2'>
          <p>Show More</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </Link>
      </div>
      <div className='h-full sm:w-[30%] w-[90%] flex flex-col items-center justify-between sm:gap-0 gap-8'>
        <div className='h-[118px] w-[135px] flex flex-col px-4 pb-4 bg-[#F3F9FF] rounded-b-2xl text-center -mt-2'>
          <div className='w-full flex justify-end size-[10px]'><FontAwesomeIcon icon={faCircleInfo} /></div>
          <h3 className='text-[#074786] text-[32px]'>{rating}</h3>
          <p className='text-[#074786] text-[14px]'>{ratingComment}</p>
          <div className='text-[#FFB80F]'>
            <FontAwesomeIcon icon={solidStar} className='size-[12px] mr-1' />
            <FontAwesomeIcon icon={solidStar} className='size-[12px] mr-1' />
            <FontAwesomeIcon icon={solidStar} className='size-[12px] mr-1' />
            <FontAwesomeIcon icon={solidStar} className='size-[12px] mr-1' />
            {srNo === '4' ? <FontAwesomeIcon icon={star} className='size-[12px] mr-1' /> : <FontAwesomeIcon icon={solidStar} className='size-[12px] mr-1' />}
          </div>
        </div>
        <button className='w-[90%] h-[48px] rounded-2xl bg-[#1B88F4] text-[white] text-[16px]'>View</button>
      </div>
    </div>
  )
}

export default Card