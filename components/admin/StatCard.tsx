import { Card } from '@/components/ui/card';
import { TrendingUp, LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  trend?: string;
  color?: 'indigo' | 'green' | 'blue';
}

export function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  color = 'indigo' 
}: StatCardProps) {
  const colors = {
    indigo: 'from-indigo-50 to-purple-50 text-indigo-600',
    green: 'from-green-50 to-emerald-50 text-green-600',
    blue: 'from-blue-50 to-cyan-50 text-blue-600',
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
          <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </p>
          {trend && (
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1 font-medium">
              <TrendingUp className="w-4 h-4" />
              {trend}
            </p>
          )}
        </div>
        <div className={`p-3 bg-gradient-to-br ${colors[color]} rounded-xl shadow-sm`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}