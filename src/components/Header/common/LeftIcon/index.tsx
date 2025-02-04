'use client';
import IconButton, { IconButtonProps } from '@/components/Button/IconButton';
import LogoIcon from '@/components/Icon/LogoIcon';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface leftIconProps {
  clickHandle: () => void;
  leftIcon:IconButtonProps['icon'] | 'LogoIcon'
}
function LeftIcon({ clickHandle, leftIcon }: leftIconProps) {
  const pathName = usePathname();
  const params = useParams()
  const router = useRouter();
  const iconClickHandle = () => {
    if(pathName ===`/chart/symbol`)
    router.push('/chart')
  }
  return (
    <div className={`${(pathName === '/chart')|| (pathName ==='/login') ? 'text-[#FD954A]' : ''} ${pathName ===`/chart/symbol`? 'text-neutral-400': ''}`}>
      {leftIcon === 'LogoIcon'? <LogoIcon/>:<IconButton icon={leftIcon} textColorTheme='none' bgColorTheme="none" sizeTheme="icon" iconSize="30px" onClick={iconClickHandle}/>}
    </div>
  );
}

export default LeftIcon;
