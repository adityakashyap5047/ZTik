import Image from "next/image"
import Link from "next/link"

function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo Menu Button */}
      <div className="">
        {/* Logo */}
        <Link href="/">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24}/>
        </Link>
      </div>
      <div className="">
        {/* User */}
        user
      </div>
    </div>
  )
}

export default LeftBar