'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

type FieldType = 'text' | 'email' | 'number' | 'date' | 'select'

interface FieldDef {
  name: string
  label: string
  type: FieldType
  options?: string[]
  placeholder?: string
  required?: boolean
}

interface SectionDef {
  title?: string
  rows: FieldDef[][]
}

const SERVICES = [
  'Transfers To & From Airport',
  'Disposal Services',
  'Point to Point Transfers',
  'Meet and Assist Airport',
] as const

const SERVICE_CONFIG: Record<(typeof SERVICES)[number], SectionDef[]> = {
  'Transfers To & From Airport': [
    {
      title: 'Passenger & Contact',
      rows: [
        [
          { name: 'passengers', label: 'Number of Passengers', type: 'number', required: true },
          { name: 'name', label: 'Name', type: 'text', required: true },
        ],
        [{ name: 'email', label: 'Email Address', type: 'email', required: true }],
      ],
    },
    {
      title: 'Arrival',
      rows: [
        [
          { name: 'dateArrival', label: 'Date of Arrival', type: 'date', required: true },
          { name: 'pickupAirport', label: 'Pick up Airport', type: 'text', required: true },
        ],
        [{ name: 'dropoffLocation', label: 'Drop off Location', type: 'text', required: true }],
      ],
    },
    {
      title: 'Departure',
      rows: [
        [
          { name: 'dateDeparture', label: 'Date of Departure', type: 'date', required: true },
          { name: 'pickupLocation', label: 'Pick up Location', type: 'text', required: true },
        ],
        [{ name: 'dropoffAirport', label: 'Drop off Airport', type: 'text', required: true }],
      ],
    },
  ],

  'Disposal Services': [
    {
      title: 'Passenger & Contact',
      rows: [
        [
          { name: 'passengers', label: 'Number of Passengers', type: 'number', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
        ],
      ],
    },
    {
      title: 'Trip Details',
      rows: [
        [
          { name: 'pickupDate', label: 'Pickup Date', type: 'date', required: true },
          { name: 'dropoffDate', label: 'Drop off Date', type: 'date', required: true },
        ],
        [
          { name: 'pickupLocation', label: 'Pick up Location', type: 'text', required: true },
          { name: 'serviceHours', label: 'Service Hours', type: 'select', options: ['08 Hrs', '04 Hrs'], required: true },
        ],
      ],
    },
  ],

  'Point to Point Transfers': [
    {
      title: 'Passenger & Contact',
      rows: [
        [
          { name: 'passengers', label: 'Number of Passengers', type: 'number', required: true },
          { name: 'name', label: 'Name', type: 'text', required: true },
        ],
        [{ name: 'email', label: 'Email Address', type: 'email', required: true }],
      ],
    },
    {
      title: 'Outbound',
      rows: [
        [
          { name: 'pickupDateOut', label: 'Pick up Date', type: 'date', required: true },
          { name: 'pickupLocationOut', label: 'Pick up Location', type: 'text', required: true },
        ],
        [{ name: 'dropoffLocationOut', label: 'Drop off Location', type: 'text', required: true }],
      ],
    },
    {
      title: 'Return',
      rows: [
        [
          { name: 'pickupDateReturn', label: 'Return Pick up Date', type: 'date', required: true },
          { name: 'pickupLocationReturn', label: 'Pick up Location', type: 'text', required: true },
        ],
        [{ name: 'dropoffLocationReturn', label: 'Drop off Location', type: 'text', required: true }],
      ],
    },
  ],

  'Meet and Assist Airport': [
    {
      title: 'Passenger & Contact',
      rows: [
        [
          { name: 'passengers', label: 'Number of Passengers', type: 'number', required: true },
          { name: 'name', label: 'Name', type: 'text', required: true },
        ],
        [{ name: 'email', label: 'Email Address', type: 'email', required: true }],
      ],
    },
    {
      title: 'Trip Details',
      rows: [
        [
          { name: 'arrivalOrDeparture', label: 'Arrival or Departure', type: 'select', options: ['Arrival', 'Departure'], required: true },
          { name: 'date', label: 'Date', type: 'date', required: true },
        ],
        [{ name: 'airport', label: 'Airport', type: 'text', required: true }],
      ],
    },
  ],
}

type FormState = 'idle' | 'submitting' | 'success'
type ServiceValue = (typeof SERVICES)[number] | ''

const EMPTY_FIELDS: Record<string, string> = {}

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [service, setService] = useState<ServiceValue>(SERVICES[0])
  const [fields, setFields] = useState<Record<string, string>>(EMPTY_FIELDS)
  const [message, setMessage] = useState('')

  function handleServiceChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setService(e.target.value as ServiceValue)
    setFields(EMPTY_FIELDS)
  }

  function handleFieldChange(name: string, value: string) {
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    setTimeout(() => setState('success'), 1200)
  }

  function resetForm() {
    setState('idle')
    setService(SERVICES[0])
    setFields(EMPTY_FIELDS)
    setMessage('')
  }

  if (state === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Request received.</h3>
        <p className={styles.successBody}>
          We will review your trip details and respond with a fixed fare within
          15 minutes during business hours, or within 1 hour overnight.
        </p>
        <button className={styles.successReset} onClick={resetForm}>
          Submit another request
        </button>
      </div>
    )
  }

  const sections = service ? SERVICE_CONFIG[service] : []

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldFull}>
        <label className={styles.label}>Service Type *</label>
        <select
          name="service"
          required
          value={service}
          onChange={handleServiceChange}
          className={`${styles.input} ${styles.select}`}
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {sections.map((section) => (
        <div key={section.title} className={styles.section}>
          {section.title && <p className={styles.sectionTitle}>{section.title}</p>}
          {section.rows.map((row, i) => (
            <div key={i} className={row.length === 2 ? styles.row : styles.fieldFull}>
              {row.map((f) => (
                <div key={f.name} className={styles.field}>
                  <label className={styles.label}>
                    {f.label}{f.required ? ' *' : ''}
                  </label>
                  {f.type === 'select' ? (
                    <select
                      name={f.name}
                      required={f.required}
                      value={fields[f.name] ?? ''}
                      onChange={(e) => handleFieldChange(f.name, e.target.value)}
                      className={`${styles.input} ${styles.select}`}
                    >
                      <option value="">Select</option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={fields[f.name] ?? ''}
                      onChange={(e) => handleFieldChange(f.name, e.target.value)}
                      className={styles.input}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}

      {service && (
        <div className={styles.fieldFull}>
          <label className={styles.label}>Additional Notes</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Flight number, special requests..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>
      )}

      <button
        type="submit"
        className={styles.submit}
        disabled={state === 'submitting' || !service}
      >
        {state === 'submitting' ? 'Sending…' : 'Send request'}
      </button>

      <p className={styles.note}>
        We respond within 15 minutes during business hours.
        All enquiries are handled confidentially.
      </p>
    </form>
  )
}
