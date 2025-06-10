
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const AttendanceChart = () => {
  const data = [
    { day: 'Mon', present: 198, absent: 49, late: 15 },
    { day: 'Tue', present: 205, absent: 42, late: 12 },
    { day: 'Wed', present: 189, absent: 58, late: 23 },
    { day: 'Thu', present: 201, absent: 46, late: 18 },
    { day: 'Fri', present: 194, absent: 53, late: 21 },
    { day: 'Sat', present: 156, absent: 91, late: 8 },
    { day: 'Sun', present: 142, absent: 105, late: 5 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-attendance-green" />
          Weekly Attendance Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" fill="hsl(var(--attendance-green))" name="Present" />
              <Bar dataKey="late" fill="#f59e0b" name="Late" />
              <Bar dataKey="absent" fill="#ef4444" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-6 mt-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-attendance-green rounded mr-2"></div>
            <span>Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded mr-2"></div>
            <span>Late</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
            <span>Absent</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceChart;
