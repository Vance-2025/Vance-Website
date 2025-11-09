'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BarChart3, LogOut, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Clear token/session
    localStorage.removeItem('admin_token');
    router.push('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Vance Admin
              </h1>
            </div>

            <nav className="flex gap-2">
              <Link href="/admin/dashboard">
                <Button
                  className={`flex-1 ${pathname === '/admin/dashboard' ? 'bg-indigo-500 hover:bg-indigo-600 hover:shadow-xl' : 'ghost'}`}
                  size="sm"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/admin/dashboard/profiles">
                <Button
                  className={`flex-1 ${pathname === '/admin/dashboard/profiles' ? 'bg-indigo-500 hover:bg-indigo-600 hover:shadow-xl' : 'ghost'}`}
                  size="sm"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Profiles
                </Button>
              </Link>
              <Link href="/admin/dashboard/messages">
                <Button
                  className={`flex-1 ${pathname === '/admin/dashboard/messages' ? 'bg-indigo-500 hover:bg-indigo-600 hover:shadow-xl' : 'ghost'}`}
                  size="sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <Link href="/admin/dashboard/conversations">
                <Button
                  className={`flex-1 ${pathname === '/admin/dashboard/conversations' ? 'bg-indigo-500 hover:bg-indigo-600 hover:shadow-xl' : 'ghost'}`}
                  size="sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Conversations
                </Button>
              </Link>
            </nav>
          </div>

          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}