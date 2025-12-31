import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mock authentication
        if (password === 'admin123') {
            localStorage.setItem('centralpaz_admin_auth', 'true');
            navigate('/admin');
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200">
                <div className="flex justify-center mb-6 text-[#2C3E50]">
                    <Lock className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-serif text-center text-[#2C3E50] mb-6">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#C0A080] outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-[#2C3E50] text-[#E0E0E0] py-3 rounded-md hover:bg-[#34495E] transition-colors font-medium"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
