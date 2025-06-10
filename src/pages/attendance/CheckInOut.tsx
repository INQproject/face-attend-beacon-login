
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Clock } from "lucide-react";

const CheckInOut = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Attendance Check-In/Out</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Face Recognition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <Camera className="w-16 h-16 text-white" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button className="bg-green-600 hover:bg-green-700">Check In</Button>
              <Button className="bg-red-600 hover:bg-red-700">Check Out</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Current Time: {new Date().toLocaleTimeString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm">Location: Office</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Last Action: Check-in at 09:00 AM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckInOut;
