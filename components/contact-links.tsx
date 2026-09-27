import { Mail, Phone } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'ebeasley@honorpathadvisors.com',
    href: 'mailto:ebeasley@honorpathadvisors.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '540-254-0353',
    href: 'tel:+15402540353',
    icon: Phone,
  },
]

export function ContactLinks() {
  return (
    <ul className="flex flex-col gap-3">
      {contacts.map(({ label, value, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            className="group flex items-center gap-4 rounded-md border border-white/10 px-4 py-3 transition-colors hover:border-gold/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</span>
              <span className="break-all text-sm text-white transition-colors group-hover:text-gold sm:text-base">
                {value}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
