import react from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Column, NavIcon } from "@/once-ui/components"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Sheetz() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <NavIcon />
      </SheetTrigger>
      <SheetContent className="border-neutral-700" side="left">
      <Column background="surface" fillHeight fillWidth  padding="l">
        <SheetHeader>
          <SheetTitle>Edupay Student</SheetTitle>
          {/*<SheetDescription>
            Update your profile information below.
          </SheetDescription> */}
        </SheetHeader>
        <Column gap="m" className="text-xl ml-5 pt-5 font-bold">
         <a  href="/dashboard/student" >
             Home
          </a>
          <a href="/dashboard/student/transactions">
            Transactions
          </a>
          <a href="/dashboard/student/invoices" >
            Invoices
          </a>
          <a href="/dashboard/student/profile" >
            Profile
          </a>
          <a href="/dashboard/student/notifications">
            Notifications
          </a>
        </Column>
        <SheetFooter>
          <Button >Logout</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </Column>
        
      </SheetContent>
    </Sheet>
  )
}
