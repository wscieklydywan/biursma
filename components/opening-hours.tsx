'use client'

import { useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'

const days = [
  { label: 'Poniedziałek', hours: '9:00–15:00' },
  { label: 'Wtorek', hours: '9:00–15:00' },
  { label: 'Środa', hours: '9:00–15:00' },
  { label: 'Czwartek', hours: '9:00–15:00' },
  { label: 'Piątek', hours: '9:00–15:00' },
  { label: 'Sobota', hours: null },
  { label: 'Niedziela', hours: null },
]

function getWarsawNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Warsaw',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const dayIndex = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(get('weekday'))
  const minutes = Number(get('hour')) * 60 + Number(get('minute'))
  const open = dayIndex < 5 && minutes >= 9 * 60 && minutes < 15 * 60
  return `${dayIndex}|${open ? 1 : 0}`
}

const subscribe = (cb: () => void) => {
  const id = setInterval(cb, 60_000)
  return () => clearInterval(id)
}

export function OpeningHours() {
  const snapshot = useSyncExternalStore(subscribe, getWarsawNow, () => '')
  const [todayStr, openStr] = snapshot.split('|')
  const today = snapshot ? Number(todayStr) : -1
  const isOpen = openStr === '1'

  return (
    <div>
      {snapshot && (
        <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold">
          <span
            aria-hidden
            className={cn('size-2 rounded-full', isOpen ? 'bg-emerald-500' : 'bg-muted-foreground/50')}
          />
          <span className={isOpen ? 'text-emerald-700' : 'text-muted-foreground'}>
            {isOpen ? 'Teraz otwarte' : 'Teraz zamknięte'}
          </span>
        </p>
      )}
      <ul className="flex flex-col gap-1 text-sm">
        {days.map((d, i) => (
          <li
            key={d.label}
            className={cn(
              'flex justify-between gap-4',
              i === today ? 'font-semibold text-foreground' : 'text-muted-foreground',
            )}
          >
            <span>{d.label}</span>
            <span className="tabular-nums">{d.hours ?? 'Zamknięte'}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
