import React from 'react'

export default function ContactComponent() {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                {/* Address */}
                <div className="md:w-1/2 p-4 flex flex-col justify-between">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Our Address</h2>
                        <address>
                            123 Main Street<br />
                            City, State 12345<br />
                            Country
                        </address>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form>
                <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
                        <input type="text" id="name" name="name" className="border rounded-lg p-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                        <input type="email" id="email" name="email" className="border rounded-lg p-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-600 font-medium">Message</label>
                        <textarea id="message" name="message" rows={4} className="border rounded-lg p-2 w-full" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg">Submit</button>
                    </form>
                </div>

            </div>

            {/* Satellite Image Map */}
            <div className="w-full p-4">
                <h2 className="text-2xl font-bold mb-4">Satellite Image Map</h2>
                <img src="https://www.google.com/maps/place/B.+J.+Corporation/@16.6476109,74.2949777,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc0fe67aaaaaaab:0xcbfba6d655f7a911!8m2!3d16.6476109!4d74.2949777!16s%2Fg%2F11szz40c53?entry=ttu" alt="Satellite Image Map" className="w-full rounded-lg" />
            </div>
        </>
    )
}
