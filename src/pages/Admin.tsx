import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookings, updateBookingStatus, type Booking } from '../utils/storage';
import { LogOut, Trash2, CheckCircle } from 'lucide-react';

const Admin = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const isAuth = localStorage.getItem('centralpaz_admin_auth');
        if (!isAuth) {
            navigate('/admin/login');
            return;
        }
        setBookings(getBookings().reverse()); // Show newest first
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('centralpaz_admin_auth');
        navigate('/admin/login');
    };

    const handleStatusChange = (id: string, status: 'confirmed' | 'cancelled') => {
        updateBookingStatus(id, status);
        setBookings(getBookings().reverse());
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-[#2C3E50]">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-white transition-colors text-gray-700"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#2C3E50] text-[#E0E0E0]">
                            <tr>
                                <th className="p-4 font-medium">Guest</th>
                                <th className="p-4 font-medium">Dates</th>
                                <th className="p-4 font-medium">Room</th>
                                <th className="p-4 font-medium">Total</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {bookings.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-gray-500">No bookings found.</td>
                                </tr>
                            ) : (
                                bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <div className="font-medium text-[#2C3E50]">{booking.guestName}</div>
                                            <div className="text-sm text-gray-500">{booking.email}</div>
                                        </td>
                                        <td className="p-4 text-gray-600">
                                            <div>In: {booking.checkIn}</div>
                                            <div>Out: {booking.checkOut}</div>
                                        </td>
                                        <td className="p-4 text-gray-600 capitalize">
                                            {booking.roomType} <span className="text-sm text-gray-400">({booking.guests} guests)</span>
                                        </td>
                                        <td className="p-4 font-medium text-[#2C3E50]">${booking.totalPrice}</td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${booking.status === 'confirmed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-red-100 text-red-800'
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right space-x-2">
                                            {booking.status === 'confirmed' && (
                                                <button
                                                    onClick={() => handleStatusChange(booking.id, 'cancelled')}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                                                    title="Cancel Booking"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            )}
                                            {booking.status === 'cancelled' && (
                                                <button
                                                    onClick={() => handleStatusChange(booking.id, 'confirmed')}
                                                    className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                                                    title="Re-confirm Booking"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
