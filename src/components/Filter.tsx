import React, { useRef } from 'react'
import { useOnClickOutside, useToggle } from 'usehooks-ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface FiltersProps {
  label: string
  options: string[],
  icon: IconProp,
  onSelected: (option: string) => void
}

const Filter: React.FC<FiltersProps> = ({
  icon,
  label,
  options,
  onSelected
}) => {
  const [showMenu, toggle, setShowMenu] = useToggle();
  const ref = useRef(null);

  const handleClickOutside = () => setShowMenu(false);

  useOnClickOutside(ref, handleClickOutside);

  const handleSelectedItem = (option: string) => {
    setShowMenu(false);
    onSelected(option);
  };

  return (
    <div ref={ref} className="relative">
      <div className="cursor-pointer select-none" onClick={toggle}>
        <FontAwesomeIcon icon={icon} className="mr-[5px] w-4 inline"/>
        {label}
      </div>
      {
        showMenu && (
          <div className="absolute left-0 top-[35px]">
            <ul className="drop-shadow-md w-[200px] bg-white" >
              {options.map((option: string) => (
                <li onClick={() => handleSelectedItem(option)} className="cursor-pointer px-5 py-5 hover:bg-[#E8E8E8]">{option}</li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Filter
