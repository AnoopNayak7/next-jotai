"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import {PlusOutlined} from '@ant-design/icons'

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2"><PlusOutlined /> Add new Todo</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Add new Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Task name
            </Label>
            <Input id="name" value="" className="col-span-3 mt-2" />
          </div>
          <div>
          <Label htmlFor="name" className="text-right">
              Description
            </Label>
            <Textarea placeholder="Type your more about the task here." />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
