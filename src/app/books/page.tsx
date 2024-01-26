'use client'
import React from 'react'
import Breadcrumbs from '@/components/breadcrumbs'
import { TextInput,Button } from "@tremor/react";
import {SearchIcon,importIcon}  from "../../components/icon";
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";
import TableComponent from './table'
const data = [
  {
    id: 1,
    name: "Person 1",
    email: "person1@example.com",
  },
  {
    id: 2,
    name: "Person 2",
    email: "person2@example.com",
  },
  {
    id: 3,
    name: "Person 3",
    email: "person3@example.com",
  },
  {
    id: 4,
    name: "Person 4",
    email: "person4@example.com",
  },
  {
    id: 5,
    name: "Person 5",
    email: "person5@example.com",
  },
  {
    id: 6,
    name: "Person 6",
    email: "person6@example.com",
  },
  {
    id: 7,
    name: "Person 7",
    email: "person7@example.com",
  },
  {
    id: 8,
    name: "Person 8",
    email: "person8@example.com",
  },
  {
    id: 9,
    name: "Person 9",
    email: "person9@example.com",
  },
  {
    id: 10,
    name: "Person 10",
    email: "person10@example.com",
  },
  {
    id: 11,
    name: "Person 11",
    email: "person11@example.com",
  },
  {
    id: 12,
    name: "Person 12",
    email: "person12@example.com",
  },
  {
    id: 13,
    name: "Person 13",
    email: "person13@example.com",
  },
  {
    id: 14,
    name: "Person 14",
    email: "person14@example.com",
  },
  {
    id: 15,
    name: "Person 15",
    email: "person15@example.com",
  },
  {
    id: 16,
    name: "Person 16",
    email: "person16@example.com",
  },
  {
    id: 17,
    name: "Person 17",
    email: "person17@example.com",
  },
  {
    id: 18,
    name: "Person 18",
    email: "person18@example.com",
  },
  {
    id: 19,
    name: "Person 19",
    email: "person19@example.com",
  },
  {
    id: 20,
    name: "Person 20",
    email: "person20@example.com",
  },
  {
    id: 21,
    name: "Person 21",
    email: "person20@example.com",
  },
  {
    id: 22,
    name: "Person 15",
    email: "person15@example.com",
  },
  {
    id: 23,
    name: "Person 16",
    email: "person16@example.com",
  },
  {
    id: 24,
    name: "Person 17",
    email: "person17@example.com",
  },
  {
    id: 25,
    name: "Person 18",
    email: "person18@example.com",
  },
  {
    id: 26,
    name: "Person 19",
    email: "person19@example.com",
  },
  {
    id: 27,
    name: "Person 20",
    email: "person20@example.com",
  },
  {
    id: 28,
    name: "Person 21",
    email: "person20@example.com",
  },
];
export default function page() {
  return (
    <div className='mx-8 mt-5'>
    <div className='container mx-auto flex justify-between flex-wrap'>
      <div>
      <TextInput icon={SearchIcon} placeholder="ค้นหาหมายเลขที่ต้องการ" /> 
      </div>
      <div>
      <Button icon={importIcon} size="xs" variant="secondary" color='teal'>Export</Button>
      </div>
    </div>
   <div >
   <TabGroup className="mt-4">
        <TabList color='teal' >
          <Tab>นัดหมายทั้งหมด</Tab>
          <Tab>รับบริการ</Tab>
          <Tab>ให้บริการแล้ว</Tab>
          <Tab>ยกเลิกการจอง</Tab>
        </TabList>
        <TabPanels>
          <TabPanel >
           
          </TabPanel>
        </TabPanels>
      </TabGroup>
   </div>
    </div>
  )
}
