import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { faBell, faCalendarAlt, faComment, faMap } from '@fortawesome/free-regular-svg-icons';

import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from 'next/image'
import React from 'react'

type User = {
  firstName: string;
  lastName: string;
  profile: string;
}

export interface PostI {
  title: string
  type: number
  description: string
  address: string
  user: User
  tags: string[]
  imagesURL?: string[]
}

interface SectionTitleI {
  title: string
  icon: IconProp
}

const SectionTitle: React.FC<SectionTitleI> = ({ title, icon }) => (
  <p>
    <FontAwesomeIcon icon={icon} className="mr-[5px] w-4 inline"/>
    {title}
  </p>
)

const Post: React.FC<PostI> = ({
  title,
  description,
  imagesURL = [],
  user,
  type,
  address,
  tags
}) => {
  const fullName = user.firstName + ' ' + user.lastName;
  return (
    <>
      <div className="w-[735px] h-[400px] flex shadow-xl rounded-md overflow-hidden">
        <div className="h-full max-w-[400px]">
          <Carousel
            className="h-full"
            showThumbs={false}
            showStatus={false}
            infiniteLoop
          >
            {
              imagesURL.map((imageURL, idx) => (
                <div key={idx} className="w-full h-full">
                  <img
                    src={imageURL}
                    alt='Carousel Photo'
                  />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className="mt-[10px]">
          <div className='px-[10px] mx-[10px] relative pb-[25px]'>
            <h2 className='text-[30px]'>{title}</h2>
            <div className="flex flex-row items-center justify-between mt-[20px]">
              <div className='flex items-center'>
                <img className='rounded-full max-w-[30px] mr-[10px]' src={user.profile || 'https://picsum.photos/100/100'} />
                <span>{fullName}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-[5px] w-4 inline"/>
                14 Oct, 2022
              </div>
              <div className="bg-primary border-none p-[15px] text-white rounded-[5px] h-[30px] w-fit leading-[0px]">
                { type === 0? "Lost" : "Found" }
              </div>
            </div>
            <div className="text-[15px] mt-[10px]">
              <SectionTitle title="Last place seen" icon={faComment} />
              <div
                className="block max-w-full m-auto leading-[1.3] overflow-hidden text-ellipsis mt-2"
              >
                {description}
              </div>
              <a
                className="text-primary"
                href="#"
              >
              </a>
            </div>
            <div className="text-[15px] mt-[10px]">
                <SectionTitle icon={faMap} title="Address" />
                <p className='mt-2'>{address}</p>
            </div>
            <div className="mt-[10px]">
              <SectionTitle icon={faBell} title="Tags" />
              <div className="mt-[10px] flex flex-wrap gap-2">
                {tags.slice(0, 5).map((tag, idx) => (
                  <div
                    key={idx}
                    className="bg-[#008000] text-white py-[5px] px-[10px] text-[12px] w-fit rounded-full"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Post);

