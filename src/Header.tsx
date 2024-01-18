import menu from "../src/assets/icons8-menu-32 (1).png"

function Header() {
  return (
    <div>
      <div className='bg-gradient-to-br from-rose-950 via-black to-rose-950 pb-24 '>
        <nav className='p-8 ml-8 text-2xl flex justify-between'>
            <h1 className='text-white font-serif'>CHARMA</h1>
            <img src={menu} alt="" />
        </nav>
        
        <div className="sm:flex items-center">
        <div className="p-20  w-[70%]">
          <h1 className="text-3xl text-white sm:text-7xl">WELCOME <br /> <span className=" sm:ml-20"> TO CHARMA</span></h1>
          <p className="text-white mt-11">TRANSFORM YOUR DAILY ROUTINE WITH PREMIUM <br />COSMETICS,ENHANCING YOUR NATURAL BEAUTY <br />EFFORTLESSLY.</p><br />
          <button className="px-4 py-2 border-2 text-white rounded-full hover:bg-yellow-500">SHOP NOW</button>
        </div>

        <div className=" flex items-center justify-center">
          <img className="w-[80%]" src="https://www.thefashionisto.com/wp-content/uploads/2017/07/David-Beckham-Respect-Fragrance-Campaign.jpg" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
