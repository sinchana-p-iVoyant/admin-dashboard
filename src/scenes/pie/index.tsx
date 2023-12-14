import React from 'react'
import { PieChart } from '../../components/piechart/PieChart'
import Header from '../../components/header/Header'

export const Pie = () => {
  return (
    <div>
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <div style={{ height:"75vh" }}>
            <PieChart />
        </div>
      </div>
  )
}

