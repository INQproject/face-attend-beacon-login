
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserPlus, Camera, FileText, Users, Calendar, Settings } from 'lucide-react';

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-attendance-text">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start hover:bg-attendance-green-light hover:border-attendance-green"
        >
          <UserPlus className="w-4 h-4 mr-3" />
          Add New Employee
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start hover:bg-attendance-green-light hover:border-attendance-green"
        >
          <Camera className="w-4 h-4 mr-3" />
          Face Enrollment
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start hover:bg-attendance-green-light hover:border-attendance-green"
        >
          <FileText className="w-4 h-4 mr-3" />
          Manual Attendance
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start hover:bg-attendance-green-light hover:border-attendance-green"
        >
          <Users className="w-4 h-4 mr-3" />
          Manage Projects
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start hover:bg-attendance-green-light hover:border-attendance-green"
        >
          <Calendar className="w-4 h-4 mr-3" />
          View Reports
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start hover:bg-attendance-green-light hover:border-attendance-green"
        >
          <Settings className="w-4 h-4 mr-3" />
          System Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
