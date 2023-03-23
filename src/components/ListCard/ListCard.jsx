import React from 'react'
import { Card } from '../Card/Card'
import style from "./ListCard.module.css"

export const ListCard = () => {
  return (
    <div className={style.list__container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
