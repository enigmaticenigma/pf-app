import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className={"bg- flex h-screen items-center justify-center"}>
      <Card className={"w-full max-w-sm"}>
        <CardHeader>
          <CardTitle className={"text-2xl"}>Select Option</CardTitle>
          <CardDescription>Please select option below.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button asChild>
            <Link href={"/atc"}>ATC</Link>
          </Button>
          <Button asChild>
            <Link href={"/pilot"}>Pilot</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
