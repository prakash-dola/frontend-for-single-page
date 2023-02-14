import"./Mini.css"


function Mini(){
    return(
        <>
<div className="flex grid gap-x-6 gap-y-4 grid-cols-3 ml-8   mt-20">
<div class=" max-w-sm rounded overflow-hidden shadow-lg  ">
  <img class="w-full " src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
    </div>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg  ">
  <img class="w-full " src="https://thumbs.dreamstime.com/b/hot-summer-sun-hot-summer-sun-rural-morning-pastoral-landscape-132662209.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Hottest Sun</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mr-8  ">
  <img class="w-full " src="https://parade.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc2MDAyMTcyMzMxMTMz/winter-instagram-captions-1-jpg.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Winter</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>

</div>
<hr className="mt-20 "></hr>
<p className="mt-10 mb-20 ml-20"> A horizontal menu with links to different sections of the homepage.. The menu becomes sticky as you scroll down the page</p>
</>
)
}
export default Mini;