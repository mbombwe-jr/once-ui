"use client";
import React from 'react'
import {Row, Column, Button, Grid, Flex, Table, Text, ThemeSwitcher} from "@/once-ui/components";
import StudentsId from '@/components/StudentsId';
import AnouncementCards from '@/components/AnnouncementCards';
import StatusCards from '@/components/statusCards';
import StudyProgress from '@/components/StudyProgress';

import './globals.css'

export default function page() {
  return (
    <>
      <div className='px-5 pt-5 w-full'>
        <Column fillWidth>
          <Row className='justify-between items-center'>
            <Column>
              <Text className='text-3xl font-bold'>Welcome back, Student!</Text>
              <Text className='opacity-70'>Track your progress and manage your studies effectively</Text>
            </Column>
            <Button data-solid="color">View Progress</Button>
          </Row>
        </Column>
        
        
        <Column className='mt-5 '>
          <Grid className='md:grid-cols-2 md:justify-between justify-center items-center'>
            <StudentsId />
            <Column fillHeight className='justify-between w-full'>
              <Text className='text-2xl font-bold'>Learning Statistics</Text>
              <StatusCards />
            </Column>
          </Grid>
        </Column>

       

        <div className='mt-5 '>
          <Grid className='md:grid-cols-2 md:justify-between justify-center items-center'>
            <Column fillHeight className='justify-top w-full'>
              <Text className='text-2xl font-bold'>Learning Statistics</Text>
              <StudyProgress />
              <ThemeSwitcher />
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
