"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusOutlined } from '@ant-design/icons';
import { useRef, useState } from "react";
import { useAtom } from "jotai";
import { todoAtom } from "@/lib/jotai/atom";

export function DialogDemo() {
  const [todos, setTodos] = useAtom(todoAtom);
  const nameInputRef = useRef(null);
  const descriptionInputRef = useRef(null);

  console.log(nameInputRef, descriptionInputRef)

  const handleAddTodo = () => {
    const newTodo = {
      name: nameInputRef.current.value || "",
      description: descriptionInputRef.current.value || "",
      timestamp: new Date().toISOString(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    nameInputRef.current.value = "";
    descriptionInputRef.current.value = "";

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <PlusOutlined /> Add new Todo
        </Button>
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
            <Input
              id="name"
              ref={nameInputRef}
              className="col-span-3 mt-2"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              ref={descriptionInputRef}
              placeholder="Type your more about the task here."
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAddTodo} type="submit">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
