'use client';
import React from 'react'
import Button from '../Components/Button';

export default function page() {
  return (
    <section>
      <h2>Section titre</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident aliquam repellendus totam, nesciunt facilis numquam magnam iusto, officia odio laudantium tempora iste ipsa neque doloremque, aspernatur consectetur dignissimos repudiandae.</p>
      <Button action={() => {alert('test !')}} label={"test click"}/>
    </section>
  )
}
