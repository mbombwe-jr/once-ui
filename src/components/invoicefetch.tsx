"use client";
import React, { useState, useRef, useEffect } from 'react'
import { Button, Line, Flex, Dialog, Spinner, Card, Column, Heading, Media, Row, Tag, Text, TiltFx } from "@/once-ui/components";
import { Input } from "@/components/ui/input"
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

import generatePDF, { Resolution, Margin } from 'react-to-pdf';

type Invoice = {
  id: number;
  invoice_number: string;
  student_id: string;
  term: string;
  academic_year: string;
  issue_date: string;
  due_date: string;
  total_amount: string;
  paid_amount: string;
  balance: string;
  status: string;
};

const student = "2023002";

{/*sample data
INSERT INTO transactions (id, type, title, description, fullDescription, date, image, amount) VALUES
(41, 'academic', 'Mid-Semester Exams Begin', 'All students must check the updated exam schedule.', 'Exam venues and times have been adjusted for some departments. Visit the exam portal for details.', '2024-06-20', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNgW6FaeEe3QP2NMKcry5tSEINxi2Slv8og&s', 0.00),
(42, 'sports', 'Friendly Volleyball Tournament', 'Join the fun and test your skills!', 'Teams can register in groups of 6–10 players. Prizes and snacks will be available.', '2024-07-05', 'https://clickpesa.com/wp-content/uploads/2024/08/airtel-money-logo.png', 2500.00),
(43, 'social', 'Student Leaders Debate Night', 'Candidates will present their visions and answer questions.', 'Engage with aspiring leaders and help shape campus policy. Event open to all.', '2024-07-10', 'https://assets.e-agriculture.fao.org/public/uploads/news/2017/05/m-pesa-logo.jpg', 0.00),
(44, 'adventure', 'Waterfall Exploration Trip', 'Hike and swim near the stunning Bagamoyo waterfalls.', 'Safety gear and transport included in the fee. Don’t forget your student ID.', '2024-09-02', 'https://images.seeklogo.com/logo-png/52/1/halo-pesa-tanzania-logo-png_seeklogo-527226.png', 9000.00),
(45, 'school', 'Tuition Payment Deadline', 'Avoid penalties by completing payment on time.', 'Log in to the student finance portal to confirm your balance and generate payment slips.', '2024-08-25', 'https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/wp-content/uploads/2019/04/Mixx_Logo_CMYK_M.Blue.jpg', 750000.00),
(46, 'academic', 'Internship Placement Briefing', 'Mandatory session for final-year students.', 'Meet representatives from leading companies and learn about placement requirements.', '2024-06-28', 'https://clickpesa.com/wp-content/uploads/2024/08/airtel-money-logo.png', 0.00),
(47, 'sports', 'Chess Tournament Registration', 'Open to beginners and experienced players.', 'Top 3 winners get trophies and mentorship opportunities with alumni.', '2024-10-15', 'https://assets.e-agriculture.fao.org/public/uploads/news/2017/05/m-pesa-logo.jpg', 2000.00),
(48, 'social', 'Community Clean-Up Day', 'Volunteer to clean our neighborhoods and plant trees.', 'Materials provided. Volunteers get certificates and T-shirts.', '2024-09-20', 'https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/wp-content/uploads/2019/04/Mixx_Logo_CMYK_M.Blue.jpg', 0.00),
(49, 'adventure', 'Campus Orienteering Challenge', 'Solve puzzles and explore your surroundings!', 'Teams of 4 will compete to find hidden clues around campus.', '2024-07-17', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNgW6FaeEe3QP2NMKcry5tSEINxi2Slv8og&s', 3000.00),
(50, 'school', 'Student Portal Maintenance', 'Portal will be offline for upgrades this weekend.', 'Plan ahead: access your course materials and exam info before Friday.', '2024-08-01', 'https://images.seeklogo.com/logo-png/52/1/halo-pesa-tanzania-logo-png_seeklogo-527226.png', 0.00);
*/}



export default function InvoiceCards() {
  const [Invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const ws = useRef<WebSocket | null>(null);
  const requestInterval = useRef<NodeJS.Timeout | null>(null);
  const options = {
    method: 'save',
    resolution: Resolution.MEDIUM,
    page: {
      margin: Margin.NONE,
      format: 'A4',
      orientation: 'portrait',
    },
    canvas: {
      mimeType: 'image/jpeg',
      qualityRatio: 1
    },
    overrides: {
      pdf: {
        compress: true
      },
      canvas: {
        useCORS: true
      }
    },
  };

  const getTargetElement = () => document.getElementById('invoice');

  useEffect(() => {
    ws.current = new WebSocket('wss://childheaded.zoofam.site/ws/invoices');

    ws.current.onopen = () => {
      setLoading(true); // Start loading
      ws.current?.send(JSON.stringify({ type: 'get_Invoices' }));
      requestInterval.current = setInterval(() => {
        ws.current?.send(JSON.stringify({ type: 'get_Invoices' }));
      }, 10000);
    };

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          setInvoices(data);
          setLoading(false); // Data loaded
        } else {
          setLoading(false); // Stop loading on unexpected data
        }
      } catch (error) {
        setLoading(false); // Stop loading on error
      }
    };

    ws.current.onerror = (error) => {
      setLoading(false); // Stop loading on error
    };

    ws.current.onclose = () => {
      if (requestInterval.current) clearInterval(requestInterval.current);
      setLoading(false); // Stop loading on close
    };

    return () => {
      if (ws.current) ws.current.close();
      if (requestInterval.current) clearInterval(requestInterval.current);
    };
  }, []);

  const AllInvoice = Invoices;

  const [contents, setcontents] = useState(3);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null); // <--- use Invoice
  const itisOpen = Boolean(selectedInvoice);
  const updateContents = () => {
    setcontents(contents + 3)
  }

  const InvoiceList = [...AllInvoice]
    .filter(Invoice => Invoice.student_id === student) // Filter by student ID
    .sort((a, b) => new Date(b.due_date).getTime() - new Date(a.due_date).getTime())
    .slice(0, contents);

  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (Invoice: Invoice) => { // <--- use Invoice
    setSelectedInvoice(Invoice);
    setIsOpen(true);
  };

  return (
    <>
      <Column className='gap-5 position-relative items-center py-5 mb-2' radius="l-4" >
        {loading ? (
          <Row fillWidth center>
            <Spinner size="l" />
          </Row>
        ) : (
          InvoiceList.map((Invoice) => (
            <Row className='px-2' key={Invoice.id}>
              <TiltFx onClick={() => handleCardClick(Invoice)}>
                <Card background='neutral-alpha-strong' radius="l-4" direction="column" border="neutral-alpha-medium">
                  <Column className=''>
                    <Row className='md:w-150 p-3'>
                      <Media
                        src="/images/nuchypId.jpg"
                        unoptimized
                        width={9}
                        height={7}
                        radius="l-4"
                        border="neutral-alpha-medium"
                      />
                      <Column maxWidth={30} className='m-2 pl-5'>
                        <Row className=' justify-between'>
                          <Heading variant="heading-strong-s" as="h2">{Invoice.term}</Heading>
                          <Tag variant="success" maxHeight={2} label={Invoice.academic_year} />
                        </Row>
                        <Row className='pt-2 opacity-60'>
                          <Text variant="label-default-s">{Invoice.invoice_number}</Text>
                        </Row>
                        <Column fillHeight className='flex-column justify-end opacity-70'>
                          <Flex className='justify-between'>
                            <Text>{Invoice.paid_amount}</Text>
                            <Text>{Invoice.total_amount}/=</Text>
                          </Flex>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Card>
              </TiltFx>
            </Row>

          ))
        )}

        {selectedInvoice && (
          <Sheet open={itisOpen} onOpenChange={(open) => {
            if (!open) setSelectedInvoice(null);
          }}>
            <SheetContent className="w-[540px] sm:w-[2480px] border-none">
              <Column fillHeight fillWidth border='neutral-medium' background='neutral-medium' className='p-5'>
                <SheetHeader>
                  <SheetTitle>Edupay</SheetTitle>
                </SheetHeader>
                <Column id="invoice">
                  <Row className='justify-between'>
                    <Text variant="label-default-m">Invoice Number: {selectedInvoice.invoice_number}</Text>
                    <Text variant="label-default-m">Term: {selectedInvoice.term}</Text>
                  </Row>
                  <Row className='justify-between'>
                    <Text variant="label-default-m">Academic Year: {selectedInvoice.academic_year}</Text>
                    <Text variant="label-default-m">Issue Date: {new Date(selectedInvoice.issue_date).toLocaleDateString()}</Text>
                  </Row>
                  <Row className='justify-between'>
                    <Text variant="label-default-m">Due Date: {new Date(selectedInvoice.due_date).toLocaleDateString()}</Text>
                    <Text variant="label-default-m">Status: {selectedInvoice.status}</Text>
                  </Row>
                  <Row className='justify-between'>
                    <Text variant="label-default-m">Total Amount: {selectedInvoice.total_amount}/=</Text>
                    <Text variant="label-default-m">Paid Amount: {selectedInvoice.paid_amount}/=</Text>
                  </Row>
                  <Row className='justify-between'>
                    <Text variant="label-default-m">Balance: {selectedInvoice.balance}/=</Text>
                  </Row>
                </Column>
                <SheetFooter>
                  <div className='flex justify-between'>
                    <Button size="l" variant="secondary" onClick={() => generatePDF(getTargetElement, options)}>Download</Button>
                    <Button size="l" variant="secondary">Pay Now</Button>
                  </div>

                  <SheetClose asChild>
                    <Button fillWidth variant="secondary">Close</Button>
                  </SheetClose>

                </SheetFooter>
              </Column>
            </SheetContent>
          </Sheet>
        )}

        <Row fillWidth center>
          <form action={updateContents}>
            <Button type='submit'>Continue</Button>
          </form>
        </Row>
      </Column>
    </>
  )
}
