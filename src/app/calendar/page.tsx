import React from 'react'
import Calendar from '@/components/Calendar'

export const metadata = {
  title: 'Calendar - E-Cell IIIT Delhi',
  description: 'Stay updated with E-Cell IIIT Delhi events, workshops, mentorship sessions, and more.',
}

export default function Page() {
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-8">
        </h2>
        <Calendar />
      </div>
    </main>
  )
}