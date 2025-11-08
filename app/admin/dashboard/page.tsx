'use client';

import { useState, useEffect } from 'react';
import { Users, Calendar, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/admin/StatCard';
import { UsersTable } from '@/components/admin/UsersTable';
import { toast } from 'sonner';
import { User, DashboardStats } from '@/lib/types';
import axios from 'axios';

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    onboarded_today: 0,
    onboarded_yesterday: 0,
    intros_made: 0,
  });
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/analytics-data`,{
        withCredentials: true,
      });
      const data = response.data;
      setStats(data.stats);
      setUsers(data.users);
    } catch (error) {
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={Users}
            label="Onboarded Today"
            value={stats.onboarded_today}
            trend="+12% from yesterday"
            color="indigo"
          />
          <StatCard
            icon={Calendar}
            label="Onboarded Yesterday"
            value={stats.onboarded_yesterday}
            color="green"
          />
          <StatCard
            icon={TrendingUp}
            label="Intros Made"
            value={stats.intros_made}
            trend="+24% this week"
            color="blue"
          />
        </div>

        <UsersTable users={users} loading={loading} />
      </div>
    </>
  );
}