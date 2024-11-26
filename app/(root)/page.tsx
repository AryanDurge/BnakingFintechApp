import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  
  const loggedIn = {firstName:"Aryan",lastName:"Durge",email:"durgearyan9@gmail.com"}; 
  
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="welcome" user={loggedIn?.firstName || 'Guest'} subtext="Access and manage your account" />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={5100.56}/>
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:1500}]}/>
    </section>
  )
}

export default Home