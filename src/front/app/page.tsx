'use client';

import { Header } from '@/components/Header';
import { CardsListsContainer } from '@/components/CardsListsContainer';

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <CardsListsContainer />
    </div>
  );
}
