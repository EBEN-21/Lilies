import React from 'react'
import Menu from './Menu'
import special1 from '../assets/bon-vivant-qom5MPOER-I-unsplash 2.png'
import special2 from '../assets/bon-vivant-qom5MPOER-I-unsplash 3.png'
import special3 from '../assets/bon-vivant-qom5MPOER-I-unsplash 4.png'

const Features = () => {
  return (
    
    <div className="px-4 sm:px-16 mt-24 sm:flex sm:flex-col items-center justify-center">
        <h1 className="w-full text-center font-[700] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-3 text-white  ">Special Meals of the day!</h1>

        <p className="text-white text-center text-xs sm:text-sm font-normal sm:w-[600px] sm:text-wrap ">Check our specials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>

        <div className="w-full sm:flex md:flex-wrap md:justify-center lg:justify-between sm:items-center mt-9 ">
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
