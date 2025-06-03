"use client";
import React from 'react'
import {Row, Column, Button, Grid, Flex, Table, Text, ThemeSwitcher} from "@/once-ui/components";
import StudentsId from '@/components/StudentsId';
import AnouncementCards from '@/components/AnnouncementCards';
import StatusCards from '@/components/statusCards';
import StudyProgress from '@/components/StudyProgress';


export default function page() {
  return (
    <>
      <div className='px-5 md:px-10 pt-5 w-full'>
        <Column fillWidth>
          <Row className='justify-between items-center'>
            <Column>
              <Text className='text-3xl font-bold'>Welcome back, Student!</Text>
              <Text className='opacity-70'>Track your progress and manage your school payments effectively</Text>
            </Column>
            <Button onClick={() => window.location.href = "/dashboard/student/invoices"} data-solid="color">Make Payments</Button>
          </Row>
        </Column>
        
        
        <Column className='mt-5 '>
          <Grid className='md:grid-cols-2 md:justify-between justify-center gap-5 items-center'>
            <div  className='flex justify-center w-full bg-black/20 bg-blur-2 rounded-xl lg:py-5  border border-gray-500'>
             <div><StudentsId /></div>
            </div>
            <Column fillHeight className='justify-between w-full'>
              <Text className='text-2xl font-bold'>Summary</Text>
              <StatusCards />
            </Column>
          </Grid>
        </Column>

       

        <div className='mt-5 '>
          <Grid className='md:grid-cols-2 md:justify-between gap-5 justify-center items-center'>
            <Column fillHeight className='justify-top w-full'>
              <Text className='text-2xl font-bold'>Info Statistics</Text>
              <StudyProgress />
            </Column>
            <Column className='justify-top'>
            <Text className='text-2xl font-bold'>Latest News</Text>
             <AnouncementCards />
            </Column>
          </Grid>
        </div>

       
        

      </div>
    </>
  )
}
