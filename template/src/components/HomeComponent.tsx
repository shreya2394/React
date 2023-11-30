import React from 'react'

export default function HomeComponent() {
    return (
        // <div className="bg-gray-100 p-4 mt-20">
        //     <div className="container mx-auto">
        //         <h1 className="text-3xl font-bold text-gray-800 mb-4">Have a look</h1>
        //         <div className="grid grid-cols-3 gap-4 h-96">
        //             <div className="rounded-lg overflow-hidden shadow-lg">
        //                 <img 
        //                 className="w-full h-auto"
        //                 src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
        //                 alt="Sample Image 1" />
        //             </div>
        //             <div className="rounded-lg overflow-hidden shadow-lg">
        //                 <img 
        //                 className="w-full h-auto"
        //                 src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
        //                 alt="Sample Image 1" />
        //             </div>
        //             <div className="rounded-lg overflow-hidden shadow-lg">
        //                 <img 
        //                 className="w-full h-auto"
        //                 src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" 
        //                 alt="Sample Image 1" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="mt-20">
            <div className="bg-gray-100 p-4">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center font-palatino font-serif text-gray-800 mb-4">Our Images</h1>
                    <div className="overflow-x-auto"> {/* Create a horizontal scrolling container */}
                        <div className="flex space-x-4">
                            <div className="rounded-lg overflow-hidden shadow-lg" style={{ flex: '0 0 auto', width: '300px' }}>
                                <img
                                    src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                    alt="Sample Image 1"
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg" style={{ flex: '0 0 auto', width: '300px' }}>
                                <img
                                    src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                    alt="Sample Image 2"
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg" style={{ flex: '0 0 auto', width: '300px' }}>
                                <img
                                    src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                    alt="Sample Image 2"
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg" style={{ flex: '0 0 auto', width: '300px' }}>
                                <img
                                    src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                    alt="Sample Image 2"
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg" style={{ flex: '0 0 auto', width: '300px' }}>
                                <img
                                    src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                    alt="Sample Image 2"
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg" style={{ flex: '0 0 auto', width: '300px' }}>
                                <img
                                    src="https://images.pexels.com/photos/18705354/pexels-photo-18705354/free-photo-of-kopru-2.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                    alt="Sample Image 2"
                                    className="object-cover w-full h-64"
                                />
                            </div>
                            {/* Add more images as needed */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
