import React from 'react'
import { Button } from "@/components/ui/button";
import CompanionCard from '@/components/ui/CompanionCard';
import CompanionsList from '@/components/ui/CompanionsList';
import Cta from '@/components/ui/Cta';
import { recentSessions } from '@/constants';




const Page = () => {
  return (
  // < div className="flex flex-col items-center justify-center  h-screen">

    <main className=''  >
      <h1>Popular Companions</h1>
      <section className='home-section' >
        <CompanionCard 
          id="1"
          name = "Neura the Brainy Explorer"
          topic = "Neural Network of the Brain"
          subject = "Neuroscience"
          duration = {40}
          color = "#ffda6e"
        />
        <CompanionCard 
          id="2"
          name = "Countsy the Math Wizard"
          topic = "Derivatives and Integrals"
          subject = "Mathematics"
          duration = {30}
          color = "#e5d0ff"
        />
        <CompanionCard 
          id="4"
          name = "Verba the Language Master"
          topic = "Language Learning Techniques"
          subject = "English literature"
          duration = {20}
          color = "#bde7ff"
        />
        

      </section>
      <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center flex-row '>
        <CompanionsList 
        title="Recently Completed Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full "
         />
        <Cta />


      </section>
    
    </main>
  // </div>
    
    
  )
}

export default Page