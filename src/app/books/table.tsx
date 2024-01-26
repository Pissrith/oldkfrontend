"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Text,
  Card,
  Button,
} from "@tremor/react";
import { IconBefore, IconNext } from "@/components/icon";

import Checkbox from "./checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };


const itemsPerPage = 5;
const maxPageNumbers = 5;

const TableComponent = ({ data, itemsPerPage, maxPageNumbers }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((oldPage) => Math.min(oldPage + 1, totalPages));
  };

  const handleClickPrevious = () => {
    setCurrentPage((oldPage) => Math.max(oldPage - 1, 1));
  };

  const handleClickPageNumber = (pageNumber:number) => {
    setCurrentPage(pageNumber);
  };
 
  let startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
  let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  if (endPage - startPage + 1 < maxPageNumbers) {
    startPage = Math.max(endPage - maxPageNumbers + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const router = useRouter();

  const goToPage = (itemId) => {
    router.push(`/bookid/${itemId}`);
  };
  return (
    <Card> 
      <Table>
        <TableHead className="text-xs">
          <TableRow>
            <TableHeaderCell >เลือก</TableHeaderCell>
            <TableHeaderCell>สถานะ</TableHeaderCell>
            <TableHeaderCell>เลขที่รายการ</TableHeaderCell>
            <TableHeaderCell>วันที่นัดหมาย</TableHeaderCell>
            <TableHeaderCell>ผู้รับบริการ</TableHeaderCell>
            <TableHeaderCell>นักกายภาพบำบัด</TableHeaderCell>
            <TableHeaderCell>เวลาเริ่มต้น</TableHeaderCell>
            <TableHeaderCell>เวลาสิ้นสุด</TableHeaderCell>
            <TableHeaderCell>จำนวนชม.</TableHeaderCell>
            <TableHeaderCell>วันที่จอง</TableHeaderCell>
            <TableHeaderCell>พื้นที่ให้บริการ</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="text-[10px]">
          {currentItems.map((item) => (
            <TableRow key={item.id} className="hover:bg-slate-200"
            onClick={()=>goToPage(item.id)}>
              <TableHeaderCell>
                <Checkbox />
              </TableHeaderCell>
              <TableHeaderCell><Text>{item.id}</Text></TableHeaderCell>
              <TableHeaderCell><Text>{item.name}</Text></TableHeaderCell>
              <TableHeaderCell><Text>{item.email}</Text></TableHeaderCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mx-1 text-end">
        <Button
          icon={IconBefore}
          variant="light"
          className="mr-2 align-middle"
          color="gray"
          onClick={handleClickPrevious}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {pageNumbers.map((number) => (
          <Button
            className="mr-1"
            color="teal"
            key={number}
            onClick={() => handleClickPageNumber(number)}
            variant={currentPage === number ? "primary" : "secondary"}
          >
            {number}
          </Button>
        ))}
        <Button
          iconPosition="right"
          icon={IconNext}
          color="gray"
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
          variant="light"
          className="ml-2 align-middle"
        >
          Next
        </Button>
      </div>
    </Card>
  );
}
export default TableComponent;
