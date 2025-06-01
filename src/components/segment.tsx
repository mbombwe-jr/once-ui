"use client"
import React from 'react'
import { SegmentedControl } from "@/once-ui/components";

function segment() {
  return (
    <div className='fixed bottom-5 left-0 right-0 z-50 w-auto flex justify-center p-4 shadow-md'>
        <SegmentedControl
          fillWidth={false}
          selected="home"
          className='text-blue-500'
          buttons={[
          { value: "/dashboard/student/", label: "home" },
          { value: "/dashboard/student/transactions", label: "transactions" },
          { value: "/dashboard/student/invoices", label: "invoices" },
          { value: "/dashboard/student/profile", label: "profile" },
        ]}
         onToggle={(value) => window.location.href = `${value}`}
         />
    </div>
  )
}

export default segment