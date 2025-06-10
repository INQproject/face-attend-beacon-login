
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import QuickActions from '@/components/dashboard/QuickActions';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">FRAS Investment</h1>
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">10 Jun 2025</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard
            title="Assigned Employees"
            value="6,000"
            icon="users"
            iconColor="text-teal-600"
            iconBg="bg-teal-50"
          />
          <StatsCard
            title="Checked In Today"
            value="3,600"
            icon="user-check"
            iconColor="text-green-600"
            iconBg="bg-green-50"
          />
          <StatsCard
            title="Checked Out Today"
            value="3,060"
            subtitle="540"
            icon="user-x"
            iconColor="text-orange-600"
            iconBg="bg-orange-50"
          />
          <StatsCard
            title="Face Enrolled"
            value="433 /"
            subtitle="6,000"
            icon="user"
            iconColor="text-blue-600"
            iconBg="bg-blue-50"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </main>
    </div>
  );
};

export default Dashboard;
