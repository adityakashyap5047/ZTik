import Image from "next/image"
import Link from "next/link"

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg"
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore",
    icon: "explore.svg"
  },
  {
    id: 3,
    name: "Notification",
    link: "/notification",
    icon: "notification.svg"
  },
  {
    id: 4,
    name: "Messages",
    link: "/messages",
    icon: "message.svg"
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/bookmarks",
    icon: "bookmark.svg"
  },
  {
    id: 6,
    name: "Jobs",
    link: "/jobs",
    icon: "job.svg"
  },
  {
    id: 7,
    name: "Communities",
    link: "/communities",
    icon: "community.svg"
  },
  {
    id: 8,
    name: "Premium",
    link: "/premium",
    icon: "logo.svg"
  },
  {
    id: 9,
    name: "Profile",
    link: "/profile",
    icon: "profile.svg"
  },
  {
    id: 10,
    name: "More",
    link: "/more",
    icon: "more.svg"
  }
];

function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* Logo Menu Button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start ">
        {/* Logo */}
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24}/>
        </Link>
        {/* Menu List */}
        <div className="flex flex-col gap-4">
          {menuList.map(item => (
            <Link href={item.link} className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4" key={item.id}>
              <Image src={`icons/${item.icon}`} alt={item.name} height={24} width={24}/>
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Button  */}
        <Link href="/" className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden">
          <Image src="icons/post.svg" alt="new post" width={24} height={24}/>
        </Link>
        <Link href="/" className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20">
          Post
        </Link>
      </div>
      <div className="flex items-center justify-between">
        {/* User */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src="/general/avatar.png" alt="user image" fill/>
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">aditya kumar</span>
            <span className="text-sm text-textGray">@aditya</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  )
}

export default LeftBar