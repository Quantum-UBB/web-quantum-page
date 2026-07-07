"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import CreateEventWizard from '@/components/news/CreateEventWizard';

export default function CreateEventPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/news');
  };

  const handleSuccess = () => {
    router.push('/news');
  };

  return (
    <div className="min-h-[calc(100vh+144px)] md:min-h-[calc(100vh+176px)] text-gray-100 font-sans selection:bg-cyan-500/30 flex justify-center p-4 pt-12 -mt-[144px] md:-mt-[176px] relative z-0">
      <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-300">
        <CreateEventWizard onSuccess={handleSuccess} onClose={handleClose} />
      </div>
    </div>
  );
}
