'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/me`, {
  //       withCredentials: true,
  //     })
  //     .then(res => {
  //       if (!res.data.authenticated) {
  //         router.push('/login');
  //       } else {
  //         setLoading(false);
  //       }
  //     })
  //     .catch(() => {
  //       router.push('/login');
  //     });
  // }, [router]);

  // ✅ Prevent page flicker until session is checked
  // if (loading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
