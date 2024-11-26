import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import Copy from './Copy'

const BankCard = ({ account, userName, showBalance = true }: CreditCardProps) => {

  console.log(account);
  return (
    <div className="flex flex-col">
      <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2 w-70%">
            <div className="flex justify-between">
              <h1 className="text-17.5 font-semibold text-white">
                {userName}
              </h1>
              <h2 className="text-17.5 font-semibold text-white">
              ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image 
            src="/icons/Paypass.svg"
            // w45 h24
            width={75}
            height={44}
            alt="pay"
            className="pl-3"
          />
          <Image 
            src="/icons/mastercard.svg"
            width={55}
            height={42}
            alt="mastercard"
            className="pl-2.5"
          />
        </div>

        <Image 
          src="/icons/lines.png"
          width={336}
          height={210}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {/* {showBalance && <Copy title={account?.sharaebleId} />} */}
    </div>
  )
}

export default BankCard

// import React from 'react'
// import Link from 'next/link'
// import { formatAmount } from '@/lib/utils'
// import Image from 'next/image'

// const BankCard = ({account, userName, showBalance = true}:CreditCardProps) => {
//   return (
//     <div className='flex flex-col'>
//         <Link href="/" className="bank-card">
//             <div className='bank-card_content'>
//                 <div>
//                     <h1 className='text-16 font-semibold text-white'> 
//                         {account.name || userName}
//                     </h1>
//                     <p className='font-ibm-plex-seerif font-black text-white'>
//                         {formatAmount(account.currentBalance || 0)}
//                     </p>
//                 </div>

//                 <article className='flex flex-col gap-2'>
//                     <div className='flex justify-between'>
//                         <h1 className='text-12 font-semibold text-white'>
//                             {userName}
//                         </h1>
//                         <h2 className='text-12 font-semibold text-white'>
//                             {/* {userName} */}
//                             ●● / ●●
//                         </h2>
//                     </div>
//                     <p className='text-12 font-semibold text-white'>
//                     ●●●● ●●●● ●●●● <span className='text-16'>1234</span>
//                     </p>
//                 </article>
//             </div>
//             <div className='bank-card_icon'>
//                 <Image
//                    src="/icons/Paypass.svg" 
//                    width={45}
//                    height={32}
//                    alt="pay"
//                 />
//                 <Image 
//                     src="/icons/mastercard.svg"
//                     width={45}
//                     height={32}
//                     alt="mastercard"    
//                 />
//             </div>
//             <Image
//                 src="/icons/lines.png"
//                 width={316}
//                 height={190}
//                 alt="lines"
//                 className='absolute top-0 left-0'
//             />
//         </Link>
//     </div>
//   )
// }

// export default BankCard