'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search, User, LogOut, Settings, Bookmark, LayoutDashboard,
  ChevronDown, Bell, ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function Navbar() {
  const isAuthenticated = true;
  const isAdmin = true;
  const user = {
    name: 'Dya',
    avatar: '/user.png',
  };

  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white relative z-10">
      {/* Logo */}
      <Link href="/">
        <h1 className="text-[#008080] text-3xl italic font-bold tracking-wide">DyaFlix</h1>
      </Link>

      {/* Menu central */}
      <div className="hidden md:flex items-center gap-4 px-6 py-2 bg-teal-50 rounded-full">
        <Link href="/" className="text-[#008080] font-medium hover:underline">Movies</Link>
        <Link href="/" className="text-[#008080] font-medium hover:underline">Series</Link>
        <Link href="/" className="text-[#008080] font-medium hover:underline">Originals</Link>

        <Search
          className="cursor-pointer text-[#008080] hover:text-white hover:bg-[#008080] p-1.5 rounded-full transition"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* Search bar toggle (inline) */}
      {showSearch && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[300px]">
          <input
            type="text"
            placeholder="Rechercher un film..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#008080]"
          />
        </div>
      )}

      {/* Right side */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            {/* Notification + Panier */}
            <Bell className="w-5 h-5 text-[#008080] hover:text-[#006666] cursor-pointer" />
            <ShoppingCart className="w-5 h-5 text-[#008080] hover:text-[#006666] cursor-pointer" />

            {/* Dropdown utilisateur */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer border px-3 py-1.5 rounded-full hover:bg-gray-100">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>DF</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-[#008080]">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-[#008080]" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/profile">Profil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bookmark className="mr-2 h-4 w-4" />
                  <Link href="/favorites">Favoris</Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <Link href="/admin">Dashboard Admin</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/settings">Paramètres</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Se déconnecter
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button className="bg-[#008080] text-white rounded-full px-5 py-2">Se connecter</Button>
            <Button variant="outline" className="border-2 border-[#008080] text-[#008080] rounded-full px-5 py-2">S'inscrire</Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
