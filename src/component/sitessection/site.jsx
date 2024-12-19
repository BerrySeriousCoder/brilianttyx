import {Button}from '@mui/material'
export default function SiteSection() {
    return <div>
    <div className="text-white bg-black py-10 px-6 md:py-14 md:px-20 flex flex-col md:flex-row justify-between items-center">
      <div className="cinzel-bold-header text-2xl md:text-5xl text-center md:text-left mb-6 md:mb-0">
        <span className="text-sky-400">Take</span> a look at our <br />
        graphic <span className="text-sky-400">developer</span> work
      </div>
      <div>
        <Button variant="outlined" className="text-sm md:text-base">
          View more work
        </Button>
      </div>
    </div>

   
  </div>
}