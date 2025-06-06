import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is your starting point. Add your content here.</p>
      </main>
      <Footer />
    </>
  );
}

export default Home;
