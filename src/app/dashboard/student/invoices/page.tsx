import React from 'react'
import StudentsInvoice from '@/components/studentsInvoice';
import InvoiceFetch from '@/components/invoicefetch';

export default function page() {
  return (
    <>
      <div>
        <StudentsInvoice />
        <div className="mx-5">
          Transactions
          <InvoiceFetch />
        </div>
      </div>
    </>
  )
}
