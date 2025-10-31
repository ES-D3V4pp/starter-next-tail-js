"use client";
import Button from "../components/Button";
import "./hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
      <h1>Section Hero Title is here !</h1>
      <p className="intro">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        provident aliquam repellendus totam.
      </p>
      <Button
        className="bg-secondary"
        action={() => {
          alert("test !");
        }}
        label={"test click"}
      />
      </div>
    </section>
  );
}
