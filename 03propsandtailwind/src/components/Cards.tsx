

function Cards({available = true}) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-80 h-80">
    <img className="w-full h-40" src="https://media.istockphoto.com/id/1362533352/photo/a-doctor-in-sterile-white-medical-gloves-pierces-the-ears-of-a-young-girl-in-the-medical.jpg?s=2048x2048&w=is&k=20&c=07wQ1N2FEemZoATeISCCgwar1B42MjGG5Tvmf_8frPE=" alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-base mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
        {available? (
                  <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Add To Cart</button>
        ) : (
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">SOLD</button>
        )}
    </div>
  </div>
  )
}

export default Cards
