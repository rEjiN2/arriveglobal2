'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

const SERVICES = [
  'Transfers To & From Airport',
  'Disposal Services',
  'Point to Point Transfers',
  'Meet and Assist Airport',
]

type FormState = 'idle' | 'submitting' | 'success'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    pickup: '',
    dropoff: '',
    date: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    setTimeout(() => setState('success'), 1200)
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
        <button
          className={styles.successReset}
          onClick={() => { setState('idle'); setForm({ name:'',email:'',phone:'',service:'',pickup:'',dropoff:'',date:'',message:'' }) }}
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Full Name *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email Address *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 (000) 000-0000"
            value={form.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Service Type *</label>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={`${styles.input} ${styles.select}`}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Pickup Location *</label>
          <input
            name="pickup"
            type="text"
            required
            placeholder="City, airport or address"
            value={form.pickup}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Drop-off Location</label>
          <input
            name="dropoff"
            type="text"
            placeholder="City, hotel or address"
            value={form.dropoff}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.fieldFull}>
        <label className={styles.label}>Travel Date</label>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldFull}>
        <label className={styles.label}>Additional Notes</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Flight number, number of passengers, special requests..."
          value={form.message}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={state === 'submitting'}
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
