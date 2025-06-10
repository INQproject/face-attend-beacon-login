
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'check-in',
      employee: 'John Doe',
      time: '09:15 AM',
      status: 'on-time',
      project: 'Project Alpha'
    },
    {
      id: 2,
      type: 'check-out',
      employee: 'Sarah Smith',
      time: '06:30 PM',
      status: 'normal',
      project: 'Project Beta'
    },
    {
      id: 3,
      type: 'exception',
      employee: 'Mike Johnson',
      time: '10:45 AM',
      status: 'late',
      project: 'Project Alpha'
    },
    {
      id: 4,
      type: 'check-in',
      employee: 'Emily Brown',
      time: '08:45 AM',
      status: 'early',
      project: 'Project Gamma'
    },
    {
      id: 5,
      type: 'manual',
      employee: 'David Wilson',
      time: '02:15 PM',
      status: 'manual-entry',
      project: 'Project Beta'
    }
  ];

  const getIcon = (type: string, status: string) => {
    if (type === 'exception' || status === 'late') {
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    }
    if (type === 'check-in') {
      return <CheckCircle className="w-4 h-4 text-attendance-green" />;
    }
    if (type === 'check-out') {
      return <XCircle className="w-4 h-4 text-red-500" />;
    }
    return <Clock className="w-4 h-4 text-blue-500" />;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'late': return 'text-yellow-600';
      case 'early': return 'text-blue-600';
      case 'manual-entry': return 'text-purple-600';
      default: return 'text-attendance-green';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="w-5 h-5 mr-2 text-attendance-green" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                {getIcon(activity.type, activity.status)}
                <div>
                  <p className="font-medium text-attendance-text">{activity.employee}</p>
                  <p className="text-xs text-attendance-text-light">{activity.project}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-attendance-text">{activity.time}</p>
                <p className={`text-xs capitalize ${getStatusColor(activity.status)}`}>
                  {activity.status.replace('-', ' ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
