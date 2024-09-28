import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to NeuroPsych AI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>AI Chatbot Sessions</CardTitle>
            <CardDescription>Your recent AI therapy sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You have completed 5 sessions this week.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mood Tracker</CardTitle>
            <CardDescription>Your mood over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Your average mood: 7.5/10</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Scheduled sessions with human therapists</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Next appointment: March 15, 2024 at 2:00 PM</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;