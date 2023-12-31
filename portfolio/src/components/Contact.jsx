import { useState,useRef } from "react"
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

// service_dwuozpa
// template_jvzrwxo
// xgWGH5Mkhs6XWkJAi
const Contact = () => {
  const formRef=useRef()
  const [form,setForm]=useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setLoading]=useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    emailjs.send('service_dwuozpa','template_jvzrwxo',{
      from_name:form.name,
      to_name:'Srijan',
      from_email:form.email,
      to_email:'srijanksah02@gmail.com',
      message:form.message
    },'xgWGH5Mkhs6XWkJAi')
    .then(()=>{
      setLoading(false)
      alert('Thankyou for contacting me. I will get back to you soon.')
      setForm({
        name:'',
        email:'',
        message:''
      })
      
    },(error)=>{
      setLoading(false)
      console.log(error.text)
      alert('There was some error. Please try again later.')
    })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween",0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder='Enter your name' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder='Enter your email' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea rows="7" name='message' value={form.message} onChange={handleChange} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' placeholder='What do you want to say' />
          </label>
          <button type="submit" className='bg-tertiary py-3 px-8 outlined-none w-fit text-white rounded-lg font-bold shadow-md shoadow-primary rounded-xl '>{loading ? 'Sending' : 'Send'}</button>
          </form>
        </motion.div>
        <motion.div variants={slideIn("right","tween",0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      </div>
  )
}

export default SectionWrapper(Contact, "contact")