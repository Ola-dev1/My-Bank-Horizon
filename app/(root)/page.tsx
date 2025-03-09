import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIN = {
    firstName: "Godzilla",
    lastName: "Dave",
    email: "GodzillaDave675@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            title="Welcome"
            type="greeting"
            user={loggedIN?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIN}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 123.50 }]}
      />
    </section>
  );
};

export default Home;
