"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import CreateNewsWizard from '@/components/news/CreateNewsWizard';

export default function CreateNewsPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/news');
  };

  const handleSuccess = () => {
    router.push('/news');
  };

  return (
    <div className="min-h-[calc(100vh+190px)] md:min-h-[calc(100vh+300px)] text-gray-100 font-sans selection:bg-cyan-500/30 flex justify-center p-1 pt-16 -mt-[190px] md:-mt-[300px] relative z-0">
      <div className="w-full max-w-4xl animate-in fade-in zoom-in duration-300">
        <CreateNewsWizard onSuccess={handleSuccess} onClose={handleClose} />
      </div>
    </div>
  );
}
