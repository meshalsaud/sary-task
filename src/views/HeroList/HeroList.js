import React from 'react'
import { useTranslation } from "react-i18next";
import { Table } from "../../components/Table"

export const HeroList = () => {
  const [t, i18n] = useTranslation("common");
  return (
    <div className='mt-4'>
      <div className='flex justify-between'>
        <div className='text-2xl sm:mx-4 font-semibold'>
        {t("Heroes List")}
        </div>
      </div>
      <Table />
    </div>
    
  )
}
