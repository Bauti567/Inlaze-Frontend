import React, { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

function Form({ onClose }: { onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = isLogin
      ? 'Logueado exitosamente'
      : 'Registrado exitosamente';
    alert(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={onClose}
          className="text-white hover:text-yellow-400 text-lg font-bold focus:outline-none"
          aria-label="Close form"
        >
          <XCircleIcon className="w-8 h-8" />
        </button>
      </div>

      <div className="relative flex flex-col md:flex-row w-11/12 max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="relative flex-1 p-4 md:p-8 bg-white/20 backdrop-blur-lg">
          <div className="text-center text-white mb-6">
            <h1 className="text-2xl font-bold">We love having you back</h1>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 font-bold rounded transition duration-300 ${
                isLogin ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
              } hover:bg-yellow-400`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 font-bold rounded transition duration-300 ${
                !isLogin ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
              } hover:bg-yellow-400`}
            >
              Sign Up
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-500 outline-none"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded transition duration-300"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <div className="text-center text-white mt-6">
            <p className="text-sm">
              For any questions, reach out to support@Quickbetdmovies.com
            </p>
          </div>
        </div>

        <div
          className="hidden md:block flex-1 p-8"
          style={{ backgroundColor: '#1C1C1C' }}
        >
          <h1 className="text-3xl font-bold mb-4 text-white">
            Welcome back to Quickbet Movies!
          </h1>
          <p className="text-sm mb-6 text-white">
            🍿 Ready to dive into the world of unlimited entertainment? Enter
            your credentials and let the cinematic adventure begin!
          </p>
          <div className="mx-auto rounded-lg">
            <Image
              src="/Character1.png"
              alt="Cinematic adventure"
              width={400}
              height={600}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
