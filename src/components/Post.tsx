import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { faBell, faCalendarAlt, faComment, faMap } from '@fortawesome/free-regular-svg-icons';

import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div>
      <div className="max-w-[400px] shadow-xl rounded-md overflow-hidden">
        <div className="h-[400px]">
          <Carousel showThumbs={false} showStatus={false} infiniteLoop>
            {
              imagesURL.map((imageURL, idx) => (
                <div className="w-full h-full">
                  <img className="h-full" key={idx} src={imageURL} alt='Post Image' />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div className="mt-[10px]">
          <div className='px-[10px] mx-[10px] relative pb-[25px]'>
            <h2 className='text-[30px]'>{title}</h2>
            <div className="flex flex-row items-center justify-between">
              <div className='flex items-center'>
                <img className='rounded-full max-w-[30px] mr-[10px]' src={user.profile || 'https://picsum.photos/100/100'} />
                <span>{fullName}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-[5px]"/>
                14 Oct, 2022
              </div>
              <div className="bg-primary border-none p-[15px] text-white rounded-[5px] h-[30px] w-fit leading-[0px]">
                { type === 0? "Lost" : "Found" }
              </div>
            </div>
            <div className="text-[15px] mt-[10px]">
              <span >
                <FontAwesomeIcon icon={faComment} className='mr-[5px]' />
                Last place seen
              </span>
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
              <span>
                <FontAwesomeIcon icon={faMap} className='mr-[5px]' />Address</span>
                <p className='mt-2'>{address}</p>
            </div>
            <div className="mt-[10px]">
              <FontAwesomeIcon icon={faBell} className='mr-[5px]' /> Tags
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
    </div>
  )
}

export default Post
