import PilotForm from "@/components/PilotForm";
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card"

export default function PilotFormPage() {
  return (
    <main className={"h-screen justify-center items-center flex"}>
      <Card className={"w-full max-w-sm"}>
        <CardHeader>
          <CardTitle className={"text-2xl"}>Pilot Form</CardTitle>
          <CardDescription>Please fill out the form below.</CardDescription>
        </CardHeader>
        <CardContent>
          <PilotForm />
        </CardContent>
      </Card>
    </main>
  );
}
