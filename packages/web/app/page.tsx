import { Stories } from '@/components/sections';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col mt-4 gap-4">
      <Stories />
    </main>
  );
}
