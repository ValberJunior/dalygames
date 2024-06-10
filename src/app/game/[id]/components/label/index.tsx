type LabelProps = {
    name : string
}

export const Label : React.FC<LabelProps> = ({name}) => (
    <div className="
        flex-grow  sm:flex-grow-0 py-1 px-3
         bg-slate-200 text-center
         text-black rounded-lg p-2
         hover:font-bold 
         transition-all duration-300 ease-out
         cursor-pointer
         ">
        {name}
    </div>
)