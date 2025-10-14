'use client';
import Button from '../components/Button';
import './hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <h2>Section Hero</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident aliquam repellendus totam, nesciunt facilis numquam magnam iusto, officia odio laudantium tempora iste ipsa neque doloremque, aspernatur consectetur dignissimos repudiandae.</p>
      <Button action={() => {alert('test !')}} label={"test click"}/>
    </section>
  )
}
