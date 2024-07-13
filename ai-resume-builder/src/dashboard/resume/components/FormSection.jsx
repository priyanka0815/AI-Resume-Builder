import React, { useState } from 'react'
import PersonalDetail from './forms/PersonalDetail'
import { Button } from '../../../components/ui/Button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import Summery from './forms/Summery'
import Experience from './forms/Experience'
import Education from './forms/Education'

const FormSection = () => {
    const [activeFormIndex, setActiveFormIndex]=useState(1);
    const [enableNext, setEnableNext]=useState(false)
  return (
    <div>

        <div className='flex justify-between items-center'>
            <Button variant="outline" size="sm" className="flex gap-2"> <LayoutGrid/> Theme</Button>
            <div className='flex gap-2'>
                {activeFormIndex>1&&<Button size='sm'
                onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button>}
                <Button 
                disabled={!enableNext}
                className="flex gap-2" size='sm'
                onClick={()=>setActiveFormIndex(activeFormIndex+1)}> Next <ArrowRight/></Button>
            </div>
        </div>

      {/* Personal Detail */}
       {activeFormIndex==1? <PersonalDetail enabledNext={(v)=>setEnableNext(v)} />
       :activeFormIndex==2?
        <Summery enabledNext={(v)=>setEnableNext(v)} />
        :activeFormIndex==3?
        <Experience />
        :activeFormIndex==4?
        <Education />
        :null
      }

      {/* Skills */}
    </div>
  )
}

export default FormSection
