import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import TradingTickerBar from "@/components/TradingTickerBar";
import UserDropdown from "@/components/UserDropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/images/logo.png" alt="GStock logo" width={150} height={50} className="h-8 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks} />
                </nav>

                <UserDropdown user={user} initialStocks={initialStocks} />
            </div>
            {/* ✅ Sticky Ticker Bar */}
            <TradingTickerBar />
        </header>
    )
}
export default Header
