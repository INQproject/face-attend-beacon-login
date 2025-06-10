
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Clock, CheckCircle, XCircle, Calendar, Settings, FileText, MapPin } from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentActivity from '@/components/dashboard/RecentActivity';
import AttendanceChart from '@/components/dashboard/AttendanceChart';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-attendance-gray">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-attendance-green-light flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b3ef1884-9643-429c-8c8a-a65c72e37024.png" 
                  alt="FRAS Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h1 className="text-xl font-bold text-attendance-text">FRAS - Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-attendance-text-light">Welcome, Admin</span>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Employees"
            value="247"
            icon={Users}
            trend="+12 this month"
            color="blue"
          />
          <StatsCard
            title="Present Today"
            value="198"
            icon={CheckCircle}
            trend="80.2% attendance"
            color="green"
          />
          <StatsCard
            title="Late Arrivals"
            value="23"
            icon={Clock}
            trend="9.3% of present"
            color="yellow"
          />
          <StatsCard
            title="Exceptions"
            value="8"
            icon={XCircle}
            trend="Needs attention"
            color="red"
          />
        </div>

        {/* Quick Actions and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceChart />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-attendance-green" />
                Project Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-attendance-green-light rounded-lg">
                  <div>
                    <h4 className="font-medium text-attendance-text">Project Alpha</h4>
                    <p className="text-sm text-attendance-text-light">45 employees assigned</p>
                  </div>
                  <span className="px-2 py-1 bg-attendance-green text-white text-xs rounded">Active</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-attendance-text">Project Beta</h4>
                    <p className="text-sm text-attendance-text-light">32 employees assigned</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded">Planning</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-attendance-text">Project Gamma</h4>
                    <p className="text-sm text-attendance-text-light">28 employees assigned</p>
                  </div>
                  <span className="px-2 py-1 bg-attendance-green text-white text-xs rounded">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
