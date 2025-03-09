import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  //Setting a condition for if there is no account available
  if (!account) {
    return <div className="text-red-500">No accounts data available</div>;
  }

  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{userName}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {/* Getting the current bal as a prop from bank prop in page.tsx */}
              {/* Ensure account is defined before accessing currentBalance */}

              {formatAmount(account?.currentBalance ?? 0)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {userName} {"    "}
              </h1>
              {"   "}
              <h2 className="text-12 font-semibold text-white"> ●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●●
              <span className="text-16">{"  "}1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image
            src="/icons/paypass.png"
            width={20}
            height={24}
            alt="Paypass"
          />
          <Image
            src="/icons/mastercard.png"
            width={45}
            height={32}
            alt="Mastercard"
            className="ml-5"
          />
        </div>
        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="Lines"
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  );
};

export default BankCard;
