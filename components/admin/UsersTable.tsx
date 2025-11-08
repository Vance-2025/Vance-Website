import { User } from '@/lib/types';
import { CheckCircle, AlertCircle, Phone, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface UsersTableProps {
  users: User[];
  loading: boolean;
}

export function UsersTable({ users, loading }: UsersTableProps) {
  if (loading) {
    return (
      <Card className="p-12">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading data...</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">User Onboarding Data</h2>
        <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-xl">
          <span className="text-sm font-semibold text-indigo-600">
            {users.length} records
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Date</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">User ID</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Name</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Need</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Email</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Linkedin</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Completion Status</th>  
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-4 text-sm font-semibold text-gray-700">Calls</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-indigo-50/50">
                <td className="py-4 px-4 text-sm text-gray-600">
                  {new Date(user.date).toLocaleDateString()}
                </td>
                <td className="py-4 px-4 text-sm font-mono text-gray-700">{user.user_id}</td>
                <td className="py-4 px-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-200">
                    {user.need}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.linkedin}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.completion_status}</td>
                
                <td className="py-4 px-4">
                  {user.profile_complete ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      Complete
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600">
                      <AlertCircle className="w-4 h-4" />
                      Incomplete
                    </span>
                  )}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-sm font-semibold bg-indigo-100 text-indigo-700">
                    <Phone className="w-3.5 h-3.5" />
                    {user.call_count}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}