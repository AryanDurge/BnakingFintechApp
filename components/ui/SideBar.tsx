'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({user}: SiderbarProps) => {

  const pathName = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                <Image 
                    src="/icons/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    className='size-[24px] max-xl:size-14px'
                />
                <h1 className='sidebar-logo'>OverSeas Pay</h1>
            </Link>
            { sidebarLinks.map((item)=>{

                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);
                return(
                    <Link href={item.route} key={item.label} className={cn('sidebar-link',{
                        'bg-bank-gradient':isActive
                    })}>
                        <div className='relatove size-6'>
                            <Image 
                                src={item.imgURL}
                                alt={item.label}
                                width={18}
                                height={18}
                                className={cn({
                                    'brightness-[3] invert-0':isActive
                                })}
                            />
                        </div>
                        <p className={cn('sidebar-label',{"!text-white":isActive})}>
                            {item.label}
                        </p>
                    </Link>
                )
            })}
            USER
        </nav>
        FOOTER
    </section>
  )
}

export default SideBar