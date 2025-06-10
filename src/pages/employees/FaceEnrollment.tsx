
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";

const FaceEnrollment = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Face Enrollment</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Capture Face</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Camera className="w-12 h-12 text-gray-400" />
            </div>
            <Button className="w-full">Start Camera</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upload Photo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <Upload className="w-12 h-12 text-gray-400" />
            </div>
            <Button variant="outline" className="w-full">Choose File</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FaceEnrollment;
