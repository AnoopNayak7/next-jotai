"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TodoCard() {
  return (
    <Card className="w-full mt-2 sm:mt-0">
      <CardHeader>
        <CardTitle>Learn Jotai</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Remove</Button>
        <Button>Mark as Completed</Button>
      </CardFooter>
    </Card>
  )
}
