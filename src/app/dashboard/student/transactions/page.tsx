import Transactions from '@/components/Transactions';
import React from 'react';
import { Column, Grid, Text } from "@/once-ui/components";
import StudyProgress from '@/components/StudyProgress';



export default function page() {
  return (
    <div>
        <div className='mt-5 '>
          
            <Column className='justify-top mb-10 mx-auto'>
            <Text className='text-2xl flex justify-center font-bold'>Latest Transactions</Text>
             <Transactions />
            </Column>
        
        </div>

    </div>
  )
}
