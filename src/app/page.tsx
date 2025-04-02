import Feed from "@/components/Feed"
import Share from "@/components/Share"
import Link from "next/link"

function page() {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link className="pb-3 flex items-center border-b-4 border-iconBlue " href="/">For Your</Link>
        <Link className="pb-3 flex items-center" href="/">Following</Link>
        <Link className="pb-3 hidden md:flex items-center" href="/">React.js</Link>
        <Link className="pb-3 hidden md:flex items-center" href="/">Next.js</Link>
        <Link className="pb-3 hidden md:flex items-center" href="/">JavaScript</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
    
  )
}

export default page