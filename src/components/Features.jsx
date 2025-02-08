import React from 'react'
import Menu from './Menu'
import special1 from '../assets/bon-vivant-qom5MPOER-I-unsplash 2.png'
import special2 from '../assets/bon-vivant-qom5MPOER-I-unsplash 3.png'
import special3 from '../assets/bon-vivant-qom5MPOER-I-unsplash 4.png'

const Features = () => {
  return (
    
    <div className="flex flex-col px-11 mt-[8%]">
        <h1 className="w-full text-center font-[700] mb-2 text-white text-[28px] ">Special Meals of the day!</h1>

        <p className="w-[609px] text-center m-auto leading-[33px] text-white font-[400] text-[17px] h-[77px] ">Check our specials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>

        <div className="flex justify-between items-center p-1">
      <Menu 
        description={"Stir fry pasta yada yada yada because of Sesan"}
        title={"Stir Fry Pasta"}
        imgUrl={special1}
      />
      <Menu 
        description={"Stir fry pasta yada yada yada because of Sesan"}
        title={"Meat Balls"}
        imgUrl={special2}
      />
      <Menu
        description={"Stir fry pasta yada yada yada because of Sesan"}
        title={"Stir Fry Pasta"}
        imgUrl={special3}
      />

      </div>
    </div>
    

  )
}

export default Features
