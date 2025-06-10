
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserCheck, UserX, User } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: 'users' | 'user-check' | 'user-x' | 'user';
  iconColor: string;
  iconBg: string;
}

const iconMap = {
  'users': Users,
  'user-check': UserCheck,
  'user-x': UserX,
  'user': User,
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon, iconColor, iconBg }) => {
  const IconComponent = iconMap[icon];

  return (
    <Card className="bg-white border border-gray-200 hover:shadow-sm transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-2">{title}</p>
            <div className="flex items-baseline space-x-1">
              <p className="text-2xl font-semibold text-gray-900">{value}</p>
              {subtitle && (
                <p className="text-lg text-gray-900">{subtitle}</p>
              )}
            </div>
          </div>
          <div className={`p-3 rounded-lg ${iconBg}`}>
            <IconComponent className={`w-6 h-6 ${iconColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
