import React, { useState } from 'react';
import { saveBooking } from '../utils/storage';
import { Calendar, Users, CreditCard, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        roomType: 'standard',
        guests: 1,
        guestName: '',
        email: '',
    });

    const getPrice = () => {
        // Mock pricing
        const basePrices: Record<string, number> = {
            standard: 50,
            deluxe: 80,
            suite: 150,
        };
        const start = new Date(formData.checkIn);
        const end = new Date(formData.checkOut);
        const nights = Math.max(1, (end.getTime() - start.getTime()) / (1000 * 3600 * 24));

        if (isNaN(nights)) return 0;

        return basePrices[formData.roomType] * nights;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const totalPrice = getPrice();
        saveBooking({
            ...formData,
            totalPrice,
        });
        setStep(3); // Confirmation
    };

    return (
        <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto min-h-screen">
            <h1 className="text-4xl font-serif text-[#2C3E50] mb-8 text-center">Book Your Stay</h1>

            {step === 1 && (
                <form onSubmit={() => setStep(2)} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-[#E0E0E0]">
                    <h2 className="text-2xl font-serif text-[#2C3E50] mb-6 flex items-center gap-2">
                        <Calendar className="w-6 h-6" /> Stay Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
                            <input
                                type="date"
                                name="checkIn"
                                required
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                                value={formData.checkIn}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
                            <input
                                type="date"
                                name="checkOut"
                                required
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                                value={formData.checkOut}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                            <select
                                name="roomType"
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                                value={formData.roomType}
                                onChange={handleChange}
                            >
                                <option value="standard">Standard Room ($50/night)</option>
                                <option value="deluxe">Deluxe Room ($80/night)</option>
                                <option value="suite">Luxury Suite ($150/night)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                            <input
                                type="number"
                                name="guests"
                                min="1"
                                max="4"
                                required
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                                value={formData.guests}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#2C3E50] text-[#E0E0E0] py-3 rounded-md hover:bg-[#34495E] transition-colors font-medium mt-4"
                    >
                        Continue
                    </button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-[#E0E0E0]">
                    <h2 className="text-2xl font-serif text-[#2C3E50] mb-6 flex items-center gap-2">
                        <Users className="w-6 h-6" /> Guest Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="guestName"
                                required
                                placeholder="John Doe"
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                                value={formData.guestName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                        <div className="flex justify-between items-center text-lg font-medium text-[#2C3E50]">
                            <span>Total Price:</span>
                            <span>${getPrice()}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Payment will be collected upon arrival.</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-1/3 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="w-2/3 bg-[#C0A080] text-white py-3 rounded-md hover:bg-[#B09070] transition-colors font-medium flex items-center justify-center gap-2"
                        >
                            <CreditCard className="w-5 h-5" /> Confirm Booking
                        </button>
                    </div>
                </form>
            )}

            {step === 3 && (
                <div className="text-center bg-white p-12 rounded-lg shadow-lg border border-[#E0E0E0]">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-serif text-[#2C3E50] mb-4">Booking Confirmed!</h2>
                    <p className="text-gray-600 mb-8">
                        Thank you, {formData.guestName}. We have sent a confirmation email to {formData.email}.
                        <br />We look forward to hosting you.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-[#2C3E50] text-[#E0E0E0] rounded-md hover:bg-[#34495E] transition-colors font-medium"
                    >
                        Return to Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default Booking;
