export interface Booking {
    id: string;
    guestName: string;
    email: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    guests: number;
    totalPrice: number;
    status: 'confirmed' | 'cancelled';
    createdAt: string;
}

const STORAGE_KEY = 'centralpaz_bookings';

export const getBookings = (): Booking[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveBooking = (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking => {
    const bookings = getBookings();
    const newBooking: Booking = {
        ...booking,
        id: Math.random().toString(36).substr(2, 9),
        status: 'confirmed',
        createdAt: new Date().toISOString(),
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
};

export const updateBookingStatus = (id: string, status: 'confirmed' | 'cancelled') => {
    const bookings = getBookings();
    const updatedBookings = bookings.map((b) =>
        b.id === id ? { ...b, status } : b
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
};
