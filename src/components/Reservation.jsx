import { useState } from 'react'

export default function Reservation() {
  const [values,setValues] = useState({name:'',date:'',time:'',phone:'',guests:''}); const [errors,setErrors]=useState({}); const [sent,setSent]=useState(false)
  const submit=e=>{e.preventDefault(); const next={}; if(!values.name.trim())next.name='Please enter your name'; if(!values.date)next.date='Choose a date'; if(values.date && new Date(values.date+'T00:00:00') < new Date(new Date().toDateString())) next.date='Choose a future date'; if(!values.time)next.time='Choose a time'; if(!/^[-+() 0-9]{7,}$/.test(values.phone))next.phone='Enter a valid phone'; if(!values.guests || +values.guests<1)next.guests='Add at least one guest'; setErrors(next); setSent(!Object.keys(next).length) }
  const field=(key,label,type='text')=><label>{label}<input type={type} value={values[key]} min={type==='number'?'1':undefined} onChange={e=>{setValues({...values,[key]:e.target.value});setErrors({...errors,[key]:''});setSent(false)}}/><small>{errors[key]}</small></label>
  return <section id="reservation" className="reservation reveal"><div><span>BOOK YOUR SPOT</span><h2>Reserve<br/>a Table</h2><p>Make your day delicious.</p></div><form onSubmit={submit} noValidate>{field('name','Full name')}{field('date','Date','date')}{field('time','Time','time')}{field('phone','Phone')}{field('guests','Guests','number')}<button className="button yellow">Submit</button>{sent&&<p className="success">Table request received! We will call to confirm.</p>}</form></section>
}
