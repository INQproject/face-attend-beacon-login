
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Upload, Eye, FileText, RefreshCw } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Bulk Attendance',
      icon: Package,
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Import Employees',
      icon: Upload,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'View Projects',
      icon: Eye,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Attendance Reports',
      icon: FileText,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Sync Data',
      icon: RefreshCw,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      status: 'Not synced yet',
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">QUICK ACTIONS</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {actions.map((action, index) => (
          <Card key={index} className="bg-white border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-lg ${action.bgColor} flex items-center justify-center mx-auto mb-3`}>
                <action.icon className={`w-6 h-6 ${action.iconColor}`} />
              </div>
              <h4 className="font-medium text-gray-900 text-sm mb-1">{action.title}</h4>
              {action.status && (
                <p className="text-xs text-gray-500">{action.status}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
