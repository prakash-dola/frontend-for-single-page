
    

function MediaCard(){

return( 
  <>
<div class="bg-gray-100 relative s">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-50">
  <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
    <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0  ">
      <div class="group  bg-gray-400 rounded-md">
        <div class="h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center"/>
        </div>
        <i class="fa-solid fa-star mt-5 ml-40 text-blue-900 "></i>
        <i class="fa-solid fa-star text-blue-900"></i>
        <i class="fa-solid fa-star text-blue-900"></i>
        <i class="fa-solid fa-star text-blue-900"></i>
        <i class="fa-solid fa-star text-blue-900"></i>
        <p class="mt-5 text-xl font-bold">"This method of designing icons is genius. i wish i had known this method a lot sooner."</p>
        <h3 class="mt-6 text-sm text-blue-500">
        Stacey Solomon,</h3><span class="flex"> Founder at Ratail Park</span>
        <div class="bg-blue-100 py-3  ">
        <p class="text-3xl font-bold  text-center">Get lost in</p>
          </div>
      </div>

      <div class="group ">
      
        <div class=" h-20 w-full overflow-hidden rounded-lg shadow-lg  bg-white group-hover:opacity-75 sm:aspect-w-2  ">
       <span class="ml-4 mt-2 text-xl overflow-hidden rounded-lg bg-red" >01</span>
        <button class=' ml-4 mt-2 text-xl overflow-hidden rounded-lg bg-red '> Resources</button>
        
      
        </div>
        <div class="mt-50 ">
      
      <button class='  border-solid border-2 border-black-600 rounded-full mt-10 py-2 px-4 ml-2 text-blue-900'>03 | Table of contents</button></div>
        <div class=" w-full h-64 overflow-hidden rounded-lg bg-white mt-10">
        <img src="https://i.pinimg.com/736x/c3/8e/b2/c38eb28bacf414009dbe6ac1bc325ac0.jpg"  width="100%"  alt=""/></div>
        <h3 class="mt-6 text-sm text-gray-500 bg-blue-100">
          <a href="#">
            <span class="absolute inset-0 "></span>
            Self-Improvement
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900 bg-blue-100">Pain shapes a woman into a warrior</p>
      </div>

      <div class="group  bg-blue-100"> 
        <div class=" h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center"/>
        </div>
        
        <h3 class="mt-6 text-sm   ml -10 text-gray-500 ">
          <a href="#">
            <span class=" inset-0  ml-5 "></span>
            Travel
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900 ml-5">Daily commute essentials</p>
        <button className="border-solid border-2 border-black-600 rounded-full  ml-5 bg-white  mt-10 py-2 px-4 font-bold   text-blue-900">Click Me</button>
        </div>
    </div>
  </div>
</div>
</div>
</>
)
}
export default MediaCard;