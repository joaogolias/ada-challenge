'use client';

import { CardsListsContainer } from '@/components/CardsLists/CardsListsContainer';
import { Header } from '@/components/Header/Header';

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <CardsListsContainer />
    </div>
  );
}
