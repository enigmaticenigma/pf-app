import ATCForm from "@/components/ATCForm"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function ATCFormPage() {
  return (
    <main className={"flex h-screen items-center justify-center"}>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">ATC Form</CardTitle>
          <CardDescription>Please fill out the form below.</CardDescription>
        </CardHeader>
        <CardContent>
          <ATCForm />
        </CardContent>
      </Card>
    </main>
  )
}
