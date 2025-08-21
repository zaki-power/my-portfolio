import ShinyText from '../textComponent/shinyText/ShinyText';

function SectionNmae({text}) {
  return (
    <div className="text-xs border-0  rounded-xl px-2 text-white bg-black shadow-[inset_0_0_5px_white] ">
    <ShinyText text= {text} disabled={false} speed={3} className='text-sm text-white' />   
    </div>
  );
}

export default SectionNmae ;