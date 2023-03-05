import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header() {
  console.log("header");
  return <h2>Header</h2>
}

function Footer() {
  console.log("footer");
  return <h2>Footer</h2>
}

function Main() {
  const [index, setIndex] = useState(0);
  const colors = ["black", "green", "red", "orange", "purple", "violet", "yellow", "blue", "pink"];
  console.log("main");

  return (
    <div style={{
      cursor: "pointer"
    }}>
      <h2 style={{
        color: colors[index],
      }} onClick={() => {
        setIndex(prev => (prev + 1) % colors.length);
      }}>Hello World</h2>
      <p>{colors[index]}</p>
    </div>
  );
}

function App() {

  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  );
}

export default App;
