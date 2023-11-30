

export default function CompanyPlusPointsComponent() {
    const peacockBlueElements = [
        { number: '5', text: 'Founders' },
        { number: '50+', text: 'Employees' },
        { number: '8+', text: 'Services' },
        { number: '100%', text: 'Quailty' },
      ];
      
  return (
    <div className="bg-orange-200 h-96 flex flex-col justify-center items-center">
    <h1 className="text-white text-3xl font-bold mb-12">Why Us?</h1>
    <div className="flex justify-between w-3/4 items-center">
      {peacockBlueElements.map((element) => (
        <div key={element.number} className="text-white text-7xl">
          {element.number}
          <div className="bg-white h-2 w-8 mx-auto my-2"></div>
          <p className="text-white text-xl text-center">{element.text}</p>
        </div>
      ))}
    </div>
  </div>
//     <div className="bg-orange-200 h-96 flex flex-col justify-center items-center">
//     <h1 className="text-sky-900 text-3xl font-bold mb-6">Center Aligned Heading</h1>
//     <div className="flex justify-center items-center">
//       {['10+', '80+', '5+', '100%'].map((number) => (
//         <div key={number} className="text-white text-5xl mr-4">
//           {number}
//           <div className="bg-white h-2 w-8 mx-auto my-2"></div>
//           <p className="text-white text-sm text-center">Small Text</p>
//         </div>
//       ))}
//     </div>
//   </div>
  )
}
