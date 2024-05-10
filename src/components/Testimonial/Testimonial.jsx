import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }}
        >
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Rajan Maurya
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Best Smart lab i ever found"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Raj Kulkarni
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                       Hassle free service
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Bhupendra
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Better customer support"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Rahul Maurya
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Easy to use nice UI"
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img 
                            src={patientAvatar}
                            alt=''
                        />
                        <div>
                            <h2 className="leading-[30px] text-lg font-semibold
                            text-headingColor">
                                Rahul suman
                            </h2>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                                <HiStar className='text-yellowColor w-[18px] h-5' />
                            </div>
                        </div>
                    </div>
                    <p className='text-base leading-7 mt-4 text-textColor font-normal'>
                        "Great job keep it up"
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial