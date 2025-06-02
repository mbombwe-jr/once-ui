import react from "react"
import { Input } from "@/components/ui/input"
import { Button, Column, NavIcon } from "@/once-ui/components"
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
          <SheetTitle>Edupay Student Dashboard</SheetTitle>
          {/*<SheetDescription>
            Update your profile information below.
          </SheetDescription> */}
        </SheetHeader>
        <Column className="text-xl ml-5  font-bold">
           <Button className="opacity-0" fillWidth size="s" weight="strong" horizontal="start" onClick={() => document.location.href="/dashboard/student"} variant="tertiary" prefixIcon="home">
             Home
           </Button>
           <Column gap="m">
           <Button fillWidth size="l" weight="strong" horizontal="start" onClick={() => document.location.href="/dashboard/student"} variant="tertiary" prefixIcon="home">
             Home
           </Button>
           <Button fillWidth size="l" weight="strong" horizontal="start" onClick={() => document.location.href="/dashboard/student/transactions"} variant="tertiary" prefixIcon="money">
             Transactions
           </Button>
           <Button fillWidth size="l" weight="strong" horizontal="start" onClick={() => document.location.href="/dashboard/student/invoices"} variant="tertiary" prefixIcon="invoice">
             Invoices
           </Button>
           <Button fillWidth size="l" weight="strong" horizontal="start" onClick={() => document.location.href="/dashboard/student/notifications"} variant="tertiary" prefixIcon="notificationalert">
             Notifications
           </Button>
           <Button fillWidth size="l" weight="strong" horizontal="start" onClick={() => document.location.href="/dashboard/student/profile"} variant="tertiary" prefixIcon="emojihappy">
             Profile
           </Button>
           </Column>
        </Column>
        <SheetFooter>
          <Button fillWidth >Logout</Button>
          <SheetClose asChild>
            <Button fillWidth variant="secondary">Close</Button>
          </SheetClose>
        </SheetFooter>
      </Column>
        
      </SheetContent>
    </Sheet>
  )
}
