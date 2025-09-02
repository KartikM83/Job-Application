import React from "react";

function Subscribe(){


    return(

        <div className=" mt-20 pb-5 px-20  items-center justify-between ">

            <div className="flex items-center justify-between bg-mine-shaft-900 px-16 py-4 rounded-2xl">
                <div className="w-[50%]  text-mine-shaft-100 text-4xl font-semibold text-center">
                    Never Wants to Miss Any <span className="text-bright-sun-400">Job News? </span>
                </div>

                <div className="w-[40%] flex items-center px-3 bg-mine-shaft-700 py-1 rounded-2xl justify-between">
                    <form>
                        <input className="h-20 bg-transparent outline-none text-xl text-mine-shaft-300 font-semibold"  type="email" name="email" id="email" placeholder="your@gmail.com" />
                    </form>
                   
                    <button className="px-8 py-5  text-xl rounded-xl font-bold text-mine-shaft-100 bg-bright-sun-400" type="submit">Subscribe</button>
                </div>

           </div>


        </div>
    )
}

export default Subscribe;